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
import description from "./LogSing/description.js";
import descriptionPro from "./LogSing/descriptionPro.js";
import Choose from "./LogSing/Choose.js";
import LoginPRO from "./LogSing/LoginPRO.js";
import SignupPro from "./LogSing/singUpPRO.js";
import GetstartedPRO from "./LogSing/GetstartedPRO.js";
import Loading from "./LogSing/loading.js";

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
import ProfileSeeker from "./yessine-components/profileseeker.jsx";
import EditProfileSeeker from './yessine-components/editprofileseeker.jsx'


import Payment from "./paymentt/payment.jsx";
import packagee from "./paymentt/packagee.js"

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
           <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} /> 
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
            name="Choose"
            component={Choose}
            options={{ headerShown: false }}
          /> 
           <Stack.Screen
            name="Getstarted"
            component={Getstarted}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="GetstartedPRO"
            component={GetstartedPRO}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="SignupPro"
            component={SignupPro}
            options={{ headerShown: false }}
          />  
          <Stack.Screen
            name="LoginPRO"
            component={LoginPRO}
            options={{ headerShown: false }}
          />                  
           <Stack.Screen
            name="description"
            component={description}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="descriptionPro"
            component={descriptionPro}
            options={{ headerShown: false }}
          /> 

           <Stack.Screen
            name="Forgpsw"
            component={Forgpsw}
            options={{ headerShown: false }}
            /> 
              <Stack.Screen
            name="packagee"
            component={packagee}
            options={{ headerShown: false }}/> 
             <Stack.Screen
            name="payment"
            component={Payment}
            options={{ headerShown: false }}/>
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
            options={{ headerShown: true }}
          /> 

          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileSeeker"
            component={ProfileSeeker}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="EditProfileSeeker"
            component={EditProfileSeeker}
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