import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function NavBar() {
  const [activeButton, setActiveButton] = useState('home');
  const navigation = useNavigation();


  const chat = () => {
    navigation.navigate('Chat'),
    setActiveButton('chat') // Update active button to 'chat' here
  };
  const home = () => {
    navigation.navigate('Homepage'),
    setActiveButton('home')
  };



  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.navButton, activeButton === 'home' && styles.activeButton]}
          onPress={home}>
          <AntDesign name="home" size={30} color={activeButton === 'home' ? '#2b5b9c' : '#87ceeb'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, activeButton === 'chat' && styles.activeButton]} // Update activeButton condition
           onPress={chat} >
          <AntDesign name="message1" size={30} color={activeButton === 'chat' ? '#2b5b9c' : '#87ceeb'} /> {/* Update icon to message1 */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, activeButton === 'heart' && styles.activeButton]}
          onPress={() => setActiveButton('heart')}>
          <AntDesign name="hearto" size={30} color={activeButton === 'heart' ? '#2b5b9c' : '#87ceeb'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, activeButton === 'user' && styles.activeButton]}
          onPress={() => setActiveButton('user')}>
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
    borderBottomColor: '#2b5b9c',
  },
});
