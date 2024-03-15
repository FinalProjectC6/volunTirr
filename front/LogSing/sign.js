import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput as PaperTextInput } from "react-native-paper";
import axios from "axios"


const { width, height } = Dimensions.get("screen");

const Register = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });


  const SignUp = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in register (service) => ', error);
      throw error;
    }
  };



  // const SignUp = async (formData) => {
  //   try {
  //     const response = await axios.post('http://localhost:3000/auth/signup', formData);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error in register (service) => ', error);
  //     throw error;
  //   }
  // };
  

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    try {
      const response = await SignUp(formData);
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration failed:", error);
      Alert.alert("Error", "Registration failed. Please try again.");
    }
  };





  const [visible, setVisible] = useState(true);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <View style={styles.design}></View>
        <TouchableOpacity style={styles.userImage}>
          <Image
            style={styles.userImageStyle}
            source={{uri:("https://cdn.discordapp.com/attachments/1211991148243984385/1212773709677461534/Screenshot_2024-02-29_154927.png?ex=65fc4908&is=65e9d408&hm=0c6982dbf3b6a235a2d8c786a056a4ca8aae7f33c3e34fb4e29652036f82255a&")}} // Provide the path to your image
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.welcome}>VOLUNTIRLY</Text>

      <View style={styles.allInput}>
        <Text style={styles.name}>Create your account</Text>
        <Text style={styles.weltext}>
          ___Create account for an amazing experience___
        </Text>

        <View style={styles.nameInput}>
          <PaperTextInput
            style={styles.input}
            placeholder=" Your First Name"
            onChangeText={(text) => setFormData({ ...formData, fullName: text })}
          />
        </View>
        <PaperTextInput
         style={styles.input}
         placeholder=" Enter Your Email"
         onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
        <PaperTextInput
          style={styles.input}
          placeholder=" Enter Your Password"
          secureTextEntry={visible}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          right={
            <PaperTextInput.Icon               
              onPress={() => setVisible(!visible)}
              icon={visible ? "eye-off" : "eye"}
            />
          }
        />
        <TouchableOpacity style={styles.registerButt}onPress={handleSubmit}>
          <Text style={styles.buttText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.design2}></View>
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
    backgroundColor: "#05A4C8",
    width: width * 0.9,
    height: height * 0.2,
    borderBottomLeftRadius: width * 0.4,
    borderBottomRightRadius: width * 0.4,
  },
  design2: {
    backgroundColor: "#05A4C8",
    width: width * 0.9,
    height: height * 0.1,
    borderTopLeftRadius: width * 0.25,
    borderTopRightRadius: width * 0.25,
    marginTop: 90,
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
    borderRadius: width * 0.3,
    width: width * 0.5,
    height: width * 0.5,
  },
  nameInput: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    backgroundColor: "rgb(238, 238, 238)",
    width: width * 0.85,
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
  registerButt: {
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
});

export default Register;
