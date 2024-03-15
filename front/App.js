import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Landing from "./LogSing/Landing.js";
import sign from "./LogSing/sign.js";
import Login from "./LogSing/Login.js";
import Getstarted from "./LogSing/Getstarted.js";
import Forgpsw from "./LogSing/Forgpsw.js";

import ChatItem from "./components/ChatItem.js";
import DeleteChatModal from "./components/DeleteChatModal.js";
import Message from "./components/Message.js";
import Chat from "./screens/Chat";
import Conversation from "./screens/Conversation";
import Map from "./screens/Map";

// import OpportunityDetailPage from "../front/componentsss/Oppdetails.jsx";
// import OpportunitiesPage from "./componentsss/Alloppotunities.jsx";

import FilteredOpp from "./yessine-components/filtredopp.jsx";
import HomePage from "./yessine-components/homepage.jsx";
import NavBar from "./yessine-components/nav";


const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Raleway: require("./assets/Raleway-Regular.ttf"),
    "Raleway-bold": require("./assets/Raleway-Bold.ttf"),
    Lato: require("./assets/Lato-Regular.ttf"),
    "Lato-bold": require("./assets/Lato-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen
            name="sign"
            component={sign}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Getstarted"
            component={Getstarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forgpsw"
            component={Forgpsw}
            options={{ headerShown: false }}
            />
           <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Conversation"
            component={Conversation}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
  });

