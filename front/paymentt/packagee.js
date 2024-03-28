import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { IP } from "../ip.json";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { width, height } = Dimensions.get("screen");

const Packagee = () => {
  const navigation = useNavigation();
  const [data, setdata] = useState([]);

  const handlePackageSelection = (pack) => {
    navigation.navigate("payment", { pack });
  };
  useEffect(() => {
    axios.get(`http:/${IP}:3000/package/getallpack`).then((res) => {
      setdata(res.data);
    });
  }, []);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.circleBackground}></View>
      <Text style={styles.header}>Choose Your Package</Text>
      <KeyboardAwareScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.packageContainer}
          onPress={() => handlePackageSelection(data[0])}
        >
          <Image
            source={{
              uri: "https://www.kaospa.com/wp-content/uploads/2023/08/bronze.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageTitle}>Bronze Package</Text>
          <Text style={styles.packagePrice}> with only $99</Text>

          <TouchableOpacity style={styles.dicoverbronze}>
            <Text style={styles.buttText}>discover more</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.packageContainer}
          onPress={() => handlePackageSelection(data[1])}
        >
          <Image
            source={{
              uri: "https://cookcountysaloon.sfo2.digitaloceanspaces.com/wp-content/uploads/2021/09/15000851/silver-package.png",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageTitle}>Silver Package</Text>
          <Text style={styles.packagePrice}> with  $199</Text>

          <TouchableOpacity style={styles.dicoversilver}>
            <Text style={styles.buttText}>discover more</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.packageContainer}
          onPress={() => handlePackageSelection(data[2])}
        >
          <Image
            source={{
              uri: "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1h13513aoblj15p5v491ieat17r.jpg",
            }}
            style={styles.packageImage}
          />
          <Text style={styles.packageTitle}>Golden Package</Text>
          <Text style={styles.packagePrice}>with  $299</Text>

          <TouchableOpacity style={styles.dicovergold}>
            <Text style={styles.buttText}>discover more</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  circleBackground: {
    width: width * 0.82,
    height: width * 0.68,
    borderRadius: (width * 0.8) / 2,
    backgroundColor: "rgba(47, 128, 237, 0.3)",
    position: "absolute",
    top: -width * 0.4,
    left: -width * 0.3,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 20,
  },
  packageContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    elevation: 5,
    alignItems: "center",
  },
  packageImage: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  packageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 5,
  },
  packageDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  packagePrice: {
    fontSize: 20,
  },
  dicoverbronze: {
    backgroundColor: "#CD7F32",
    width: width * 0.6,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  buttText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  dicoversilver: {
    backgroundColor: "#C0C0C0",
    width: width * 0.6,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  dicovergold: {
    backgroundColor: "#B8860B",
    width: width * 0.6,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Packagee;
