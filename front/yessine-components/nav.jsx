import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { AntDesign , MaterialCommunityIcons} from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function NavBar(data) {
  const [activeButton, setActiveButton] = useState('');
  const navigation = useNavigation();

  const chat = () => {
    navigation.navigate('Chat',{data});
    setActiveButton('chat'); // Assuming you want to highlight the chat icon when navigated to the Chat screen
  };

  const home = () => {
    navigation.navigate('HomePage',{data});
    setActiveButton('home');
  };

  const profileseeker = () => {
    navigation.navigate('ProfileSeeker',{data});
    setActiveButton('ProfileSeeker');
  };

  const US = () => {
    navigation.navigate('constactus',{data});
    setActiveButton('information');
  };

  const map = () => {
    navigation.navigate('Map');
    setActiveButton('Map');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.navButton, activeButton === 'home' && styles.activeButton]}
          onPress={home}>
          <Ionicons name="home-outline" size={30} color={activeButton === 'home' ? '#0A3C57' : '#87CEEB'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, activeButton === 'chat' && styles.activeButton]} 
          onPress={chat}>
          <Ionicons name="chatbox-outline" size={30} color={activeButton === 'chat' ? '#0A3C57' : '#87CEEB'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, activeButton === 'maps' && styles.activeButton]}
          onPress={map}>
          <AntDesign name="enviroment" size={30} color={activeButton === 'maps' ? '#2b5b9c' : '#87ceeb'} />
        </TouchableOpacity>
        <TouchableOpacity
      style={[styles.navButton, activeButton === 'user' && styles.activeButton]}
      onPress={US}>
      <MaterialCommunityIcons name="information" size={30} color={activeButton === 'user' ? '#2b5b9c' : '#87ceeb'} />
    </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, activeButton === 'user' && styles.activeButton]}
          onPress={profileseeker}>
          <AntDesign name="user" size={30} color={activeButton === 'user' ? '#2b5b9c' : '#87ceeb'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  navButton: {
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#0A3C57',
  },
});
