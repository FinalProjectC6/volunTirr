import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import socket from "../utils/socket";
import Message from "../components/Message";
import * as ImagePicker from "expo-image-picker";
import { Audio } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";

const Conversation = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [audioRecord, setAudioRecord] = useState(null);
  const { id: ChatId, image, name } = route.params;
  let role = "provider"; 
  if (Platform.OS === "android") role = "seeker";

  const isProvider = role === "provider";

  const sendMessage = async () => {
    if (!input) return;

    const messageBody = {
      content: input,
      ChatId: ChatId,
      timestamp: new Date().toGMTString(),
      isProvider,
    };

    try {
      await fetch(`http://192.168.103.17:3000/chat/createmessage`, {
        method: "POST",
        body: JSON.stringify(messageBody),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      socket.emit("message", ChatId, messageBody);
      addMessage(messageBody);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const addMessage = (newMsg) => {
    setMessages((prevMessages) => [...prevMessages, newMsg]);
  };

  useEffect(() => {
    fetch(`http://192.168.103.17:3000/chat/getallmessage/${ChatId}`)
      .then((result) => result.json())
      .then((result) => setMessages(result))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    socket.emit("connected", ChatId);
    socket.on("message", addMessage);

    return () => {
      socket.off("message");
    };
  }, []);

  const takePhoto = async () => {
    const pickerResult = await ImagePicker.launchCameraAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    const selected = pickerResult.assets[0];
    console.log("Selected Image:", selected);
  };

  const startRecording = async () => {
        if (permissionResponse.status !== "granted")
            await requestPermission();
        const { recording, status } = await Audio.Recording.createAsync();
        console.log(status)
        setAudioRecord(recording)
    }

    const stopRecording = async () => {
        if (!audioRecord) return;
        await audioRecord.stopAndUnloadAsync();

        const uri = audioRecord.getURI();
        const audioBlob = await fetch(uri).then(res => res.blob())
        console.log(audioBlob)
        const fr = new FileReader()
        fr.onloadend = async () =>
          await fetch(`http://192.168.103.17:3000/chat/createaudio/11`, {
            method: "POST",
            body: fr.result,
          });
        fr.readAsDataURL(audioBlob)

        const base64Data = await fetch(
          `http://192.168.103.17:3000/chat/getaudio/11`
        ).then((res) => res.json());
        console.log(base64Data)
        const { sound } = await Audio.Sound.createAsync({ uri: base64Data.data })
        await sound.playAsync()
        setAudioRecord(null)
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
      </View>
      <View style={styles.chat}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.timestamp}
          renderItem={({ item }) => (
            <Message
              content={item.content}
              belongsToUser={item.isProvider === isProvider}
              timestamp={item.timestamp}
            />
          )}
          extraData={messages}
        />
      </View>
      <View style={styles.inputContainer}>
        <Pressable
          style={styles.voiceButton}
          onLongPress={startRecording}
          onPressOut={stopRecording}
        >
          <FontAwesome name="microphone" size={24} color="#53587A" />
        </Pressable>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={setInput}
          placeholder="Say something"
          placeholderTextColor="#A1A5C1"
        />
        <TouchableOpacity onPress={takePhoto}>
          <Feather name="camera" size={24} color="black" />
        </TouchableOpacity>
        <Pressable style={styles.send} onPress={sendMessage}>
          <Feather name="send" size={16} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    minHeight: "8%",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  chat: {
    backgroundColor: "#F5F4F8",
    borderRadius: 16,
    marginHorizontal: 8,
    flex: 1,
  },
  inputContainer: {
    minHeight: "10%",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 24,
    marginHorizontal: 12,
    marginBottom: 20,
    backgroundColor: "white",
    alignItems: "center", // Center items vertically
  },
  name: {
    flex: 3,
    fontSize: 28,
    fontWeight: "bold",
    color: "#006",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    width: 50,
    aspectRatio: 1 / 1,
    borderRadius: 24,
  },
  send: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "#FF6584",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10, // Add some space between input and send button
  },
  input: {
    flex: 1,
    marginRight: 10, // Add some space between input and camera button
  },
  voiceButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    aspectRatio: "1/1",
  },
});

export default Conversation;
