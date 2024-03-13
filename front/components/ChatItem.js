import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import DeleteChatModal from "./DeleteChatModal";

export default function ChatItem(props) {
  const { image, name, goToConversation, deleteChat } = props;
  const [showDelete, setshowDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ position: "relative" }}>
      <Pressable
        style={{
          ...styles.container,
          right: showDelete ? 125 : 0,
        }}
        onPress={() => {
          if (!showDelete) goToConversation(name, image);
        }}
        onLongPress={() => setshowDelete(!showDelete)}
      >
        <View
          style={{
            border: "3px solid white",
          }}
        >
          <Image
            src={image}
            style={styles.image}
            defaultSource={{ uri: "../assets/favicon.png" }}
          />
        </View>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
      </Pressable>
      <View style={styles.deleteContainer}>
        <TouchableOpacity
          onPress={() => {
            setshowDelete(false);
          }}
        >
          <Entypo name="cross" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <AntDesign name="delete" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <DeleteChatModal
        showModal={showModal}
        setShowModal={setShowModal}
        deleteChat={deleteChat}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    borderRadius: 24,
    backgroundColor: "#eee",
    alignItems: "center",
    height: 70,
  },
  name: {
    flex: 3,
    fontSize: 16,
    fontFamily: "Raleway-bold",
    color: "#006",
  },
  image: {
    width: 50,
    aspectRatio: 1 / 1,
    borderRadius: 24,
  },
  deleteContainer: {
    position: "absolute",
    height: "100%",
    padding: 12,
    paddingRight: 24,
    right: 0,
    backgroundColor: "#25B4F8",
    width: "50%",
    borderRadius: 24,
    zIndex: -1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 16,
  },
});
