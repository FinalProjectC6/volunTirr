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

const Choose = () => {
  const navigation = useNavigation();
  const goToGetstartedseeker = () => {
    navigation.navigate("Getstarted");
  };
  const goToGetstartedProvider = () => {
    navigation.navigate("GetstartedPRO");
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
      <Text style={styles.title}>SELECT YOUR ROLE</Text>
      <Text style={styles.subtitle}>
        All while making an impact, Here you might wanna choose a role to serve your needs   
        so you can countinue your journey with us.
      </Text>
      <View style={styles.buttP} >
      <TouchableOpacity style={styles.registerButt} onPress={goToGetstartedseeker}>
        <Text style={styles.buttText}>Seeker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logButt} onPress={goToGetstartedProvider}>
        <Text style={styles.buttText}>Provider</Text>
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
    marginTop: -280,
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
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  registerButt: {
    backgroundColor: "#25B4F8",
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
    backgroundColor: "#25B4F8",
    width: width * 0.75,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop:10
  },
  buttP:{
    marginTop :90
  }
});

export default Choose;
