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
import AudioMessage from "../components/AudioMessage";
import { useRef } from "react";
import PhotoMessage from "../components/PhotoMessage";
import * as FileSystem from "expo-file-system";



const Conversation = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [audioRecord, setAudioRecord] = useState(null);
  const { id: ChatId, image, name } = route.params;
  const listRef = useRef();
  // console.log("messages",messages);
  useEffect(() => {
    listRef.current.scrollToEnd({ params: { animated: true } });
  }, [messages]);
  let role = "provider";
  if (Platform.OS === "android") role = "seeker";

  const isProvider = role === "provider";

  const sendMessage = async (audioMsg = null, photos = null) => {
    if (!input && !audioMsg && !photos) return;

    const messageBody = {
      content: input,
      ChatId: ChatId,
      isProvider,
      photos,
      timestamp: new Date().toISOString(),
      audio: audioMsg,
    };

    await fetch("http://192.168.101.3:3000/chat/createmessage", {
      method: "POST",
      body: JSON.stringify(messageBody),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        socket.emit("message", ChatId, messageBody);
        addMessage(messageBody);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  const addMessage = (newMsg) => {
    setMessages((prevMessages) => [...prevMessages, newMsg]);
  };

  useEffect(() => {
    fetch(`http://192.168.101.3:3000/chat/getallmessage/${ChatId}`)
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
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (result.canceled) return;

    try {
      const photoInfo = [];

      for (const asset of result.assets) {
        const { uri, mimeType, fileName } = asset;

        const photoName =
          "img" + new Date().getTime() + "." + fileName.split(".").at(-1);

        await FileSystem.uploadAsync(
          "http://192.168.101.3:3000/chat/createfile",
          uri,
          {
            fieldName: photoName,
            httpMethod: "POST",
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
          }
        );
        console.log("photo", fileName, "uploaded");

        photoInfo.push({ name: photoName, type: mimeType });
      }

      await sendMessage(null, photoInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const startRecording = async () => {
    if (permissionResponse.status !== "granted") await requestPermission();
    const { recording, status } = await Audio.Recording.createAsync();
    console.log(status);
    setAudioRecord(recording);
  };

  const stopRecording = async () => {
    if (!audioRecord) return;
    const { durationMillis } = await audioRecord.stopAndUnloadAsync();

    const uri = audioRecord.getURI();
    const audioBlob = await fetch(uri).then((res) => res.blob());
    const fr = new FileReader();
    fr.onloadend = async () => {
      await sendMessage({ data: fr.result, duration: durationMillis });
      setAudioRecord(null);
    };

    fr.readAsDataURL(audioBlob);
  };



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
          ref={listRef}
          data={messages}
          keyExtractor={(item) => item.timestamp}
          renderItem={({ item }) =>
            item.audio ? (
              <AudioMessage
                belongsToUser={item.isProvider === isProvider}
                timestamp={item.timestamp}
                audio={item.audio}
              />
            ) : item?.photos?.length > 0 ? (
              <PhotoMessage photos={item.photos} />
            ) : (
              <Message
                content={item.content}
                belongsToUser={item.isProvider === isProvider}
                timestamp={item.timestamp}
              />
            )
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Pressable
          style={styles.voiceButton}
          onLongPress={startRecording}
          onPressOut={stopRecording}
        >
          <FontAwesome name="microphone" size={28} color="#FF6584" />
        </Pressable>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={setInput}
          placeholder="Say something"
          placeholderTextColor="#A1A5C1"
        />
        <TouchableOpacity onPress={takePhoto}>
          <Feather name="image" size={28} color="black" />
        </TouchableOpacity>
        <Pressable style={styles.send} onPress={() => sendMessage()}>
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
    marginLeft: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  voiceButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#F5F4F8",
  },
});

export default Conversation;