import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'; // Import useRoute

const windowWidth = Dimensions.get('window').width;

const ProfileSeeker = () => {
  const [name, setName] = useState('jhon');
  const [email, setEmail] = useState('jhon.doe@example.com');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('Male');
  const [phone, setPhone] = useState('123-456-7890');
  const [profilePicture, setProfilePicture] = useState("https://fr.web.img4.acsta.net/pictures/17/06/14/13/48/489688.jpg");
  const navigation = useNavigation();

  const handleEditProfilePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    } else {
      Alert.alert('Image picker', 'You have canceled image picking');
    }
  };

  const edit = () => {
    navigation.navigate('EditProfileSeeker');
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
    top: 40,
    right: 20,
    zIndex: 1,
  },
  circleBackground: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.9,
    borderRadius: (windowWidth * 0.45),
    backgroundColor: 'rgba(47, 128, 237, 0.3)', 
    position: 'absolute',
    top: -windowWidth * 0.45,
    left: -windowWidth * 0.45,
  },
  content: {
    flex: 1,
    paddingTop: 120, 
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureContainer: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 80, 
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75, 
  },
  editProfilePicture: {
    position: 'absolute',
    backgroundColor: '#0F4C75',
    borderRadius: 20,
    padding: 10,
    right: 90,
    top: 120, 
    zIndex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 18,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    marginRight: 20,
  },
  cardText: {
    flex: 1,
    fontSize: 18,
    color: '#333333',
  },
});

export default ProfileSeeker;
