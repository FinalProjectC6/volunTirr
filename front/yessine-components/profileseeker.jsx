import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import NavBar from './nav';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'; // Import useRoute

const windowWidth = Dimensions.get('window').width;

const ProfileSeeker = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('Male');
  const [phone, setPhone] = useState('123-456-7890');
  const [profilePicture, setProfilePicture] = useState("https://fr.web.img4.acsta.net/pictures/17/06/14/13/48/489688.jpg");
  const navigation = useNavigation();

  const handleEditProfilePicture = () => {
   
    console.log('Edit profile picture pressed');
  };
  const edit = () => {
   navigation.navigate('EditProfileSeeker')
   
  };

  const route = useRoute(); // Use useRoute hook to access route params

  const { data } = route.params; // Access passed data object
  
  console.log(data, "home data");


  return (
    <View style={styles.container}>
      <View style={styles.circleBackground}></View>
      <TouchableOpacity style={styles.settingsIconContainer} onPress={edit}>
        <FontAwesome5 name="cog" size={24} color="#333333" />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={handleEditProfilePicture} style={styles.editProfilePicture}>
            <FontAwesome5 name="edit" size={20} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.profilePictureContainer}>
            {profilePicture ? (
              <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
            ) : (
              <FontAwesome5 name="user-circle" size={100} color="#BDBDBD" />
            )}
          </View>
          <View style={{ marginBottom: 20 }}>
            <View style={styles.card}>
              <FontAwesome5 name="user" size={24} color="#1976D2" style={styles.icon} />
              <Text style={styles.cardText}>{name}</Text>
            </View>
            <View style={styles.card}>
              <FontAwesome5 name="envelope" size={24} color="#1976D2" style={styles.icon} />
              <Text style={styles.cardText}>{email}</Text>
            </View>
            <View style={styles.card}>
              <FontAwesome5 name="birthday-cake" size={24} color="#1976D2" style={styles.icon} />
              <Text style={styles.cardText}>{age} years old</Text>
            </View>
            <View style={styles.card}>
              <FontAwesome5 name="venus-mars" size={24} color="#1976D2" style={styles.icon} />
              <Text style={styles.cardText}>{gender}</Text>
            </View>
            <View style={styles.card}>
              <FontAwesome5 name="phone" size={24} color="#1976D2" style={styles.icon} />
              <Text style={styles.cardText}>{phone}</Text>
            </View>
          </View>
        </View>
      </View>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  settingsIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  circleBackground: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
    borderRadius: (windowWidth * 0.6) / 2,
    backgroundColor: 'rgba(47, 128, 237, 0.3)', 
    position: 'absolute',
    top: -windowWidth * 0.4,
    left: -windowWidth * 0.4,
  },
  content: {
    flex: 1,
    paddingTop: 60, 
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 60, 
  },
  profilePicture: {
    width: 110,
    height: 110,
    borderRadius: 60, 
  },
  editProfilePicture: {
    position: 'absolute',
    backgroundColor: '#0F4C75',
    borderRadius: 15,
    padding: 5,
    right: 70,
    top: 90, 
    zIndex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
});

export default ProfileSeeker;
