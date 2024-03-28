import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const SuccessMessage = ({ onFinish }) => {


  const navigation = useNavigation();

  const Cbon = () => {
    navigation.navigate('PartOne');
  }; 
 
  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle-outline" size={100} color="#25B4F8" style={styles.icon} />
      <Text style={styles.message}>Your listing is now published!</Text>
      <TouchableOpacity style={styles.finishButton} onPress={onFinish}>
        <Text style={styles.finishButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  message: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  finishButton: {
    backgroundColor: '#25B4F8',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SuccessMessage;
