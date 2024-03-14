import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const DeleteChatModal = (props) => {
  const { showModal, setShowModal, deleteChat } = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false);
      }}
    >
      <ImageBackground resizeMode="cover" style={styles.dropback} />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <AntDesign name="questioncircle" size={72} color="#FF6584" />
          <Text style={styles.warning}>
            Are you sure you want to
            <Text style={{ fontFamily: "Raleway-bold" }}> delete </Text>
            all your chat?
          </Text>
          <Text style={{ ...styles.warning, fontSize: 12, color: "#53587A" }}>
            This action cannot be undone!
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: "#F5F4F8",
                color: "#252B5C",
              }}
              onPress={async () => {
                await deleteChat();
                setShowModal(false);
              }}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteChatModal;

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    padding: 18,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
    gap: 36,
  },
  dropback: {
    backgroundColor: "#000",
    opacity: 0.75,
    flex: 1,
  },
  warning: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Raleway",
    color: "#252B5C",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    gap: 12,
  },
  button: {
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6584",
    color: "white",
    textAlign: "center",
    borderRadius: 16,
    width: "50%",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Lato",
  },
});
