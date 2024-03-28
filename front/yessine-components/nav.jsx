import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function NavBar() {
  const [activeButton, setActiveButton] = useState('');
  const navigation = useNavigation();

  const chat = () => {
    navigation.navigate('Chat');
  };

  const home = () => {
    navigation.navigate('HomePage');
  };

  const profileseeker = () => {
    navigation.navigate('ProfileSeeker');
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
          style={[styles.navButton, activeButton === 'heart' && styles.activeButton]}>
          <Ionicons name="heart-outline" size={30} color={activeButton === 'heart' ? '#0A3C57' : '#87CEEB'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, activeButton === 'user' && styles.activeButton]}
          onPress={profileseeker}>
          <Ionicons name="person-outline" size={30} color={activeButton === 'user' ? '#0A3C57' : '#87CEEB'} />
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
