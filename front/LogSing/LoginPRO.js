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
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const { width, height } = Dimensions.get("screen");

const LoginPRO = () => {
  const [visible, setVisible] = useState(true);
  const [formData, setFormData] = useState({
    email_address: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const goToSignUp = () => {
    navigation.navigate("sign");
  };

  const Forgpsw = () => {
    navigation.navigate("Forgpsw");
  };

  const GoToHome = () => {
    navigation.navigate("HomePage");
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!formData.email_address || !formData.password) {
      Alert.alert("Login Error", "All fields are required");
      setLoading(false);
      return;
    }

    try {
      const data = await login_me(formData);

      if (data.token) {
        setLoading(false);
        Alert.alert("Welcome", data.name);
        setTimeout(() => {
          navigation.navigate("HomePage",{data});
          console.log(data,"data log");
        }, 2000);
        ;
      } else {
        setLoading(false);
        Alert.alert("Error");
      }
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", "An unexpected error occurred");
    }
  };

  const login_me = async (formData) => {
    try {
      const response = await axios.post(`http://192.168.101.3:3000/auth/loginPro`, formData);
      return response.data;
    } catch (error) {
      console.log("error in login (service) => ", error);
      throw error;
    }
  };

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
            source={{ uri: "https://cdn.discordapp.com/attachments/1211991148243984385/1212773709677461534/Screenshot_2024-02-29_154927.png?ex=65fc4908&is=65e9d408&hm=0c6982dbf3b6a235a2d8c786a056a4ca8aae7f33c3e34fb4e29652036f82255a&" }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.welcome}>WELCOME</Text>

      <View style={styles.allInput}>
        <Text style={styles.name}>Enjoy the journey!</Text>
        <Text style={styles.weltext}>
          ___Let’s login for explore continues___
        </Text>
        <PaperTextInput
          style={styles.input}
          placeholder=" Enter Your email"
          onChangeText={(text) => setFormData({ ...formData, email_address: text })}
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
        <Text style={styles.forgotPassword} onPress={Forgpsw}>Forgot password</Text>
        <Text style={styles.alha} onPress={goToSignUp}>Don't have an account?</Text>

        <TouchableOpacity style={styles.LogButt} onPress={handleSubmit} disabled={loading}>
          <Text style={styles.buttText} onPress={GoToHome} >Log in</Text>
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
    backgroundColor: "#42B7FB",
    width: width * 0.9,
    height: height * 0.2,
    borderBottomLeftRadius: width * 0.4,
    borderBottomRightRadius: width * 0.4,
  },
  design2: {
    backgroundColor: "#42B7FB",
    width: width * 0.8,
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
  alha: {
    fontSize: 15,
    color: "#42B7FB",
    marginLeft: 195,
  }
});

export default LoginPRO;
