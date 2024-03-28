import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet,Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const PartTwo = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { opportunityData } = route.params;
  const [location, setLocation] = useState('2323sdfghj');

  const goBack = () => {
    navigation.goBack();
  };

  const goNext = () => {
    const updatedOpportunityData = { ...opportunityData, location }; 
    navigation.navigate('PartThree', { opportunityData: updatedOpportunityData });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <View style={styles.circleBackground}></View>

        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={28} color="#000" style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>Add Listing</Text>
      </View>
      <Text style={styles.title}>Where is the Location?</Text>
      {/* Add your UI components for location input here */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Add your UI components for location input here */}
      </ScrollView>
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={goNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 20, // Added padding bottom
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 50,
    marginBottom: 20,
  },
  arrowIcon: {
    marginRight: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  nextButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20, // Added margin bottom
  },
  nextButton: {
    backgroundColor: '#25B4F8',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
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
});

export default PartTwo;
