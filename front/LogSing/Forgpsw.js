import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput as PaperTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


const { width, height } = Dimensions.get("screen");

const Forgpsw = () => {
  const [visible, setVisible] = useState(true);
  
  const navigation = useNavigation();


  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.userImage}>
          <Image source={{ uri: 'https://cdn.discordapp.com/attachments/1211991148243984388/1215278758723059742/design2.png?ex=65fc2b8a&is=65e9b68a&hm=4ade4f667cc358aa45bd6738fa740ada8c24b252024e51a27e6bfff7f5bc6cc7&'}}// Provide the path to your image
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.welcome}>Reset Your Password</Text>

      <View style={styles.allInput}>
        <Text style={styles.weltext}>
          Enter your email adress below and we’ll send you a link with __instructions__
        </Text>
        <PaperTextInput style={styles.input} placeholder=" Enter Your Email" />


        <TouchableOpacity style={styles.LogButt}>
          <Text style={styles.buttText}>Verifie</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },
  header: {
    height: height * 0.32,
    padding: 5,
    alignItems: "center",
  },
  design: {
    backgroundColor: "#42B7FB",
    width: width * 0.9,
    height: height * 0.2,
    borderBottomLeftRadius: width * 0.4,
    borderBottomRightRadius: width * 0.4,
  },
  design2: {
    backgroundColor: "#42B7FB",
    width: width * 0.8,
    height: height * 0.15,
    borderTopLeftRadius: width * 0.25,
    borderTopRightRadius: width * 0.25,
    marginTop: 80,
  },
  userImage: {
    position: "absolute",
    marginTop: width * 0.2,
    borderRadius: width * 0.5,
    width: width * 0.35,
    height: height * 0.16,
    justifyContent: "center",
    alignItems: "center",
  },
  userImageStyle: {
    borderRadius: width * 0.2,
    width: width * 0.5,
    height: width * 0.5,
  },
  nameInput: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    backgroundColor: "rgb(238, 238, 238)",
    width: width * 0.8,
    height: height * 0.07,
    borderRadius: 10,
    borderColor: "#05A4C8",
    borderWidth: 2,
  },
  allInput: {
    padding: 10,
    alignItems: "center",
    gap: 15,
  },
  LogButt: {
    backgroundColor: "#05A4C8",
    width: width * 0.75,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  welcome: {
    fontSize: 26,
    fontWeight: "bold",
  },
  weltext: {
    color: "#969AA8",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center", // Center the text horizontally
},
  name: {
    color: "#05A4C8",
    fontSize: 30,
    fontWeight: "bold",
  },
  forgotPassword: {
    fontSize: 15,
    color: "#42B7FB",
    marginLeft: 220,
  },
  alha:{
    fontSize: 15,
    color: "#42B7FB",
    marginLeft: 180,
  }
});

export default Forgpsw;
