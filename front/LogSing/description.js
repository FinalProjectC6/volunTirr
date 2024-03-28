import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput as PaperTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native"; // Import useRoute
import axios from "axios";


const { width, height } = Dimensions.get("screen");

const Description = () => {

  const route = useRoute(); // Use useRoute hook to access route params

  
  const { userData, userID } = route.params;

  console.log(userID);

  const navigation = useNavigation();
  const [mydata, setMydata] = useState({
    background: "",
    bio: "",
    phone: "",
    age: "",
    gender: "",
    description: "",
  });

  const info = async () => {
    try {
      const response = await axios.put(
        `http:/192.168.43.39:3000/seeker/updateseeker/${userID}`,
        mydata
      ); // Include userID in the URL
      console.log("info updated:", response.data);
      navigation.navigate("Login");
    } catch (error) {
      console.error(" error in update:", error);
      Alert.alert("Error", "Something is wrong. Please try again.");
    }
  };
  const handleGo = async () => {
    if (
      !mydata.background ||
      !mydata.bio ||
      !mydata.phone ||
      !mydata.age ||
      !mydata.gender    ) {
      Alert.alert("Error", "All info must be filled");
      return;
    }

    try {
      await info();
      console.log("loading");
    } catch (error) {
      console.error("Registration failed:", error);
      Alert.alert("Error", "Something is wrong. Please try again.");
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.userImage}>
          <Image
            source={{
              uri: "https://cdn.discordapp.com/attachments/1211991148243984388/1215278758723059742/design2.png?ex=65fc2b8a&is=65e9b68a&hm=4ade4f667cc358aa45bd6738fa740ada8c24b252024e51a27e6bfff7f5bc6cc7&",
            }}
          />
        </TouchableOpacity>
        <View style={styles.design}></View>
      </View>
      <View style={styles.allInput}>
        <Text style={styles.welcome}>Your Infos </Text>
        <Text style={styles.weltext}>
          __tell us more about you for a better experience__
        </Text>
        <View style={styles.nameInput}>
          <PaperTextInput
            style={styles.input}
            placeholder="Enter bio"
            onChangeText={(text) => setMydata({ ...mydata, bio: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <PaperTextInput
            style={styles.input2}
            placeholder="Age"
            keyboardType="numeric"
            onChangeText={(text) => setMydata({ ...mydata, age: text })}
          />
          <PaperTextInput
            style={styles.input2}
            placeholder="Phone number"
            keyboardType="numeric"
            onChangeText={(text) => setMydata({ ...mydata, phone: text })}
          />
        </View>
        <View style={styles.nameInput}>
          <PaperTextInput
            style={styles.input}
            placeholder="Gender"
            onChangeText={(text) => setMydata({ ...mydata, gender: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input3}
            placeholder="    Description"
            multiline={true}
            numberOfLines={10}
            onChangeText={(text) => setMydata({ ...mydata, background: text })}
          />
        </View>
        <TouchableOpacity style={styles.LogButt} onPress={handleGo}>
          <Text style={styles.buttText}>GO ahead</Text>
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
  userImage: {
    position: "absolute",
    marginTop: width * 0.2,
    borderRadius: width * 0.5,
    width: width * 0.35,
    height: height * 0.16,
    justifyContent: "center",
    alignItems: "center",
  },
  nameInput: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "rgb(238, 238, 238)",
    width: width * 0.8,
    height: height * 0.07,
    borderRadius: 10,
    borderColor: "#05A4C8",
    borderWidth: 2,
  },
  input2: {
    backgroundColor: "rgb(238, 238, 238)",
    width: width * 0.39,
    height: height * 0.07,
    borderRadius: 10,
    borderColor: "#05A4C8",
    borderWidth: 2,
    marginHorizontal: 5,
  },
  input3: {
    backgroundColor: "rgb(238, 238, 238)",
    width: width * 0.8,
    height: height * 0.1,
    borderRadius: 10,
    borderColor: "#05A4C8",
    borderWidth: 2,
    marginHorizontal: 5,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  allInput: {
    padding: 10,
    alignItems: "center",
    gap: 15,
    marginTop: -75,
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
});

export default Description;
