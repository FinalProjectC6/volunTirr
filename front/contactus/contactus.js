import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Button, Dimensions, Alert,TouchableOpacity } from 'react-native';
import { TextInput as PaperTextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import axios from 'axios'; 

const windowWidth = Dimensions.get('window').width;
const { width, height } = Dimensions.get("screen");

const AboutUsScreen = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const sendEmail = async () => {
    try {
      await axios.post(`http://192.168.100.4:3000/send-email`, {
        to: email,
        subject: subject,
        text: description,
      });
      Alert.alert('Success', 'Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      Alert.alert('Error', 'Failed to send email. Please try again later.');
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
    
      <View style={styles.circleBackground}></View>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.subtitle}>We care about you and what troubles you. Feel free to learn more about us.</Text>

      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg' }} style={styles.image} />
      </View>
      
      {/* Email input */}
      <View style={styles.staticElement}>
        <Text style={styles.staticLabel}>Email</Text>
        <PaperTextInput
          style={styles.emailInput}
          placeholder="example@email.com"
          onChangeText={setEmail}
        />
      </View>
      
      {/* Subject input */}
      <View style={styles.staticElement}>
        <Text style={styles.staticLabel}>Subject</Text>
        <PaperTextInput
          style={styles.emailInput}
          placeholder="Question about your services"
          onChangeText={setSubject}
        />
      </View>

      {/* Description input */}
      <View style={styles.staticElement}>
        <Text style={styles.staticLabel}>Description</Text>
        <PaperTextInput
          style={styles.descriptionInput}
          placeholder="I would like to inquire about the pricing..."
          onChangeText={setDescription}
          multiline
        />
      </View>

      {/* Submit button */}
      <TouchableOpacity style={styles.submit} onPress={sendEmail}>
          <Text style={styles.buttText}  >send</Text>
        </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40, 
    alignItems: 'center', 
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#252B5C',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: "#252B5C",
  },
  staticElement: {
    marginBottom: 20,
    width: '100%', 
  },
  staticLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#252B5C',
  },
  emailInput: {
    backgroundColor: "rgb(238, 238, 238)",
    width: width * 0.85,
    height: height * 0.07,
    borderRadius: 10,
    borderColor: "#25B4F8",
    borderWidth: 2,
  },
  descriptionInput: {
    borderWidth: 2,
    borderColor: "#25B4F8",
    borderRadius: 10,
    backgroundColor: "rgb(238, 238, 238)",
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000000',
    height: 100,
  },
  buttonContainer: {
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden', 
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
  },
  circleBackground: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
    borderRadius: (windowWidth * 0.8) / 2,
    backgroundColor: 'rgba(47, 128, 237, 0.3)', 
    position: 'absolute',
    top: -windowWidth * 0.4,
    left: -windowWidth * 0.4,
  }, 
  buttText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
   submit: {
    backgroundColor: "#25B4F8",
    width: width * 0.50,
    height: height * 0.06,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  }
});

export default AboutUsScreen;
