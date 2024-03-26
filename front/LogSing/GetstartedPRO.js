import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const GetstartedPRO = () => {
  const navigation = useNavigation();
  const goToSignUp = () => {
    navigation.navigate("SignupPro");
  };
  const goToLog = () => {
    navigation.navigate("LoginPRO");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <View style={styles.design}>
        <TouchableOpacity style={styles.userImage}>
          <Image
            style={styles.userImageStyle}
            source={{uri:("https://cdn.discordapp.com/attachments/1211991148243984385/1212773709677461534/Screenshot_2024-02-29_154927.png?ex=65fc4908&is=65e9d408&hm=0c6982dbf3b6a235a2d8c786a056a4ca8aae7f33c3e34fb4e29652036f82255a&")}} // Provide the path to your image
          />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lay} >
      <Text style={styles.title}>HELLO PROVIDER</Text>
      <Text style={styles.subtitle}>Welcome, Providers! Your generosity and willingness to offer opportunities make a world of difference. Join us in empowering seekers, building communities, and creating positive change one opportunity at a time.
      </Text>
      <View style={styles.buttP} >
      <TouchableOpacity style={styles.registerButt} onPress={goToSignUp}>
        <Text style={styles.buttText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logButt} onPress={goToLog}>
        <Text style={styles.buttText}>log in</Text>
      </TouchableOpacity>
      </View>
      </View>

    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    width: width,
    height: height,
  },
  header: {
    height:  400,
    padding: 1,
    alignItems: "center",
  },
  design: {
    backgroundColor: "#25B4F8",
    width: width * 0.9,
    height: height * 0.25,
    borderBottomLeftRadius: width * 0.4,
    borderBottomRightRadius: width * 0.4,
  },
  userImageStyle: {
    borderRadius: width * 0.2,
    width: width * 0.5,
    height: width * 0.5,
    alignItems: "center",
    marginTop:90,
    marginLeft:75

  },
  lay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -220,
  },

  title:   {
    fontSize: 40, 
    fontWeight: '500',
    lineHeight: 76,
    letterSpacing: 5,
    textAlign: 'center',
    color: '#000000', // Adjust color as needed
    paddingHorizontal: 15

  },
  subtitle: {
    color: "#969AA8",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing:1,
    textAlign: "center",
    paddingHorizontal: 15
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
  logButt: {
    backgroundColor: "#05A4C8",
    width: width * 0.75,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop:10
  },
  buttP:{
    marginTop :80
  }
});

export default GetstartedPRO;
