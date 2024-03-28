import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const data = [
  {
    id: "1",
    imageUrl:
     "https://c1.wallpaperflare.com/preview/652/904/898/tunisia-the-roman-empire-the-ruins-of-the-ruins-of-rome.jpg"  },
  {
    id: "2",
    imageUrl:
"https://c1.wallpaperflare.com/preview/237/648/918/blue-city-old-town-chefchaune-morocco.jpg"  },
  {
    id: "3",
    imageUrl:
       "https://c0.wallpaperflare.com/preview/398/956/17/tunis-medina-mosque-tunisia.jpg"  },
  {
    id: "4",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/30/39/b8/cartoline-da-sousse-tunisia.jpg?w=500&h=-1&s=1",
  },
  {
    id: "5",
    imageUrl:
"https://c1.wallpaperflare.com/preview/902/749/177/castle-tunisia-djerba-palm-trees.jpg"
 },
];

const HorizontalCarousel = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </View>
  );

  const goToChoose = () => {
    navigation.navigate("Choose");
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <SafeAreaView>
        <Text style={styles.welcomeText}>Welcome to </Text>
        <Text style={styles.welcomeText2}>Volunteer</Text>
        <Text style={styles.title}>Connect with Purpose </Text>
        <Text style={styles.paragraph1}>
          Volunteer is more than just a mobile app; it's a platform where
          seekers and providers come together with a shared purpose. Seekers,
          who dream of exploring new places but face financial constraints, meet
          providers willing to offer accommodations, meals, or financial support
          in exchange for work opportunities  ,   <Text style={styles.our2} onPress={goToChoose} >Come join now !!!</Text>

        </Text>

        <SafeAreaView>
          <Text style={styles.discover}>Discover more about our country</Text>
          <View style={styles.carrou}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 7 }}
            />
          </View>
        </SafeAreaView>
        <Text style={styles.our}>What are we up to !</Text>
        <Text style={styles.paragraph2}>Facilitating Meaningful Exchanges</Text>
        <Text style={styles.paragraph}>t Volunteer, we believe in fostering genuine connections and meaningful exchanges between seekers and providers. Through our user-friendly interface, seekers can easily find opportunities that match their skills and interests, while providers can connect with motivated individuals eager to contribute to their projects or businesses.
        </Text>
        <Text style={styles.paragraph2}>Join the Movement:</Text>
        <Text style={styles.paragraph}>
        Join the Volunteer movement today and be part of a global community dedicated to making travel more accessible, meaningful, and sustainable. Whether you're a seeker ready to explore new horizons or a provider looking to make a positive impact, Volunteer offers a platform where everyone has something valuable to contribute
        </Text>
        <Text style={styles.paragraph2}>Building Communities:</Text>
        <Text style={styles.paragraph}>
          Beyond transactions, Volunteer is about building communities based on
          trust, collaboration, and shared values. Our platform facilitates not
          only practical exchanges but also the formation of lasting friendships
          and networks that transcend geographical boundaries.
        </Text>
        <TouchableOpacity style={styles.registerButt} onPress={goToChoose}>
          <Text style={styles.buttText}>Get started</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph3}>Don't miss the chance</Text>

      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    width: width * 0.8,
    marginHorizontal: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    overflow: "hidden", // Ensure images don't exceed item boundaries
  },
  image: {
    width: "100%",
    height: 600,
  },
  registerButt: {
    backgroundColor: "#25B4F8",
    width: width * 0.75,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center", // Center the button horizontally
  },
  buttText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  welcomeText: {
    backgroundColor: "#25B4F8",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 30,
    fontStyle: "italic",
    textDecorationLine: "underline",
    color: "white",
    marginTop:5
  },
  welcomeText2: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 34,
    fontStyle: "italic",
    color: "#25B4F8",
    marginTop:15

  },
  discover: {
    fontWeight: "400",
    fontSize: 25,
    fontStyle: "italic",
    color: "#05A4C8",
    marginLeft: 10,
  },
  paragraph: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 30,
    fontWeight: "400",
    color: "#05A4C8",
  },
  paragraph1: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 30,
    fontWeight: "400",
  },
  paragraph2: {
    marginTop: 5,
    fontSize: 18,
    lineHeight: 34,
    marginLeft: 20,
    fontWeight: "500",
    
  },
  paragraph3: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "400",
    color: "#05A4C8",
    marginBottom: 20,

  },
  title: {
    textAlign: "left",
    fontWeight: "400",
    fontSize: 30,
    fontStyle: "italic",
    color: "#05A4C8",
    marginTop: 20,
    marginLeft: 10,
  },
  carrou: {
    marginTop: 10,
    marginLeft:5
  },
  our: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#25B4F8",
    marginLeft: 10,
    marginTop: 20,
  },
  our2: {
    fontWeight: "500",
    fontSize: 20,
    color: "#05A4C8",
  },
});

export default HorizontalCarousel;
