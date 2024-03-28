import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Platform
} from "react-native";
import ChatItem from "../components/ChatItem";
import socket from "../utils/socket";

export default function Chat({ navigation }) {
  const [chats, setChats] = useState([]);
  const userId = 1; // Change this to real user id
  const role = "provider"; // Change this to real isProvider depending on user role
  const isProvider = role === "provider";

  const goToConversation = (id, name, image) => {
    navigation.navigate("Conversation", { id, name, image });
  };

  useEffect(() => {
    fetch(
      `http://192.168.100.9:3000/chat/getallchats/${userId}${
        isProvider ? "?isProvider=true" : ""
      }`
    )
      .then((result) => result.json())
      .then((result) => setChats(result))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    socket.connect();

    return () => socket.disconnect();
  }, []);

  const deleteChat = async (chatId) => {
    await fetch(`http://192.168.43.39:3000/chat/deletechat/${chatId}`, {
      method: "DELETE",
    }).then(() => {
      const filteredChats = chats.filter((chat) => chat.id !== chatId);
      setChats(filteredChats);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <ScrollView>
        {chats.map((chat) => (
          <View key={chat.id} style={styles.chat}>
            <ChatItem
              image={chat.image}
              name={chat.fullname}
              chatId={chat.id}
              goToConversation={() =>
                goToConversation(chat.id, chat.fullname, chat.image)
              }
              deleteChat={() => deleteChat(chat.id)}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 10,
    paddingTop: Platform.OS === "ios" ? 40 : 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003",
    padding: 10,
  },
  chat: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    padding :5
  },
});
