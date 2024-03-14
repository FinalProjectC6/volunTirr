
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './yessine-components/homepage.jsx';
import NavBar from './yessine-components/nav';


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./screens/Chat";
import Conversation from "./screens/Conversation";
import { StatusBar } from "react-native";
import Map from "./screens/Map";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

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
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './LogSing/Landing.js';
import sign from './LogSing/sign.js';
import Login from './LogSing/Login.js';
import Getstarted from './LogSing/Getstarted.js'
import Forgpsw from './LogSing/Forgpsw.js';
const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Conversation"
          component={Conversation}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


















