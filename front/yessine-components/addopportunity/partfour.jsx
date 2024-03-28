import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomAlert from "./alertOpportunity.jsx";
import SuccessMessage from "./successmessage.jsx";

const windowWidth = Dimensions.get('window').width;

const PartFour = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { opportunityData } = route.params;
  console.log(opportunityData);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [planning, setPlanning] = useState('');
  const [category, setCategory] = useState([
    { id: '1', name: 'Category 1', selected: false },
    { id: '2', name: 'Category 2', selected: false },
    { id: '3', name: 'Category 3', selected: false },
    { id: '4', name: 'Category 4', selected: false }
  ]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [successVisible, setSuccessVisible] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const publishOpportunity = async () => {
    if (!price || !description || !planning || category.filter(cat => cat.selected).length === 0) {
      setAlertMessage('Please fill in all fields');
      setAlertVisible(true);
      return;
    }

    try {
      const selectedCategories = category.filter(cat => cat.selected).map(cat => cat.name).join(', ');

      const opportunity = {
        title: opportunityData.title,
        description: description,
        category: selectedCategories,
        start: opportunityData.start,
        end: opportunityData.end,
        price: price,
        number_of_seekers: opportunityData.number_of_seekers,
        location: opportunityData.location,
        image1: opportunityData.image1,
        image2: opportunityData.image2,
        image3: opportunityData.image3 || null,
        image4: opportunityData.image4 || null,
        logistics: opportunityData.logistics,
        planning: planning,
        ProviderId: opportunityData.ProviderId
      };

      console.log('Opportunity:', opportunity);

      const response = await axios.post('http://192.168.100.9:3000/opp/addopp', opportunity, { timeout: 10000 });

      console.log('Opportunity created');
      setSuccessVisible(true);

    } catch (error) {
      console.error('Error creating opportunity:', error);
      setAlertMessage('Failed to create opportunity. Please try again later.');
      setAlertVisible(true);
    }
  };

  const handleCategoryToggle = (id) => {
    const updatedCategory = category.map(cat =>
      cat.id === id ? { ...cat, selected: !cat.selected } : cat
    );
    setCategory(updatedCategory);
  };

  const handleFinish = () => {
    console.log('hello');
    navigation.navigate('PartOne');

  };

  const CategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryItem, item.selected && styles.selectedCategoryItem]}
      onPress={() => handleCategoryToggle(item.id)}
    >
      <Text style={[styles.categoryItemText, item.selected && { color: '#fff' }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {successVisible ? (
        <SuccessMessage onFinish={handleFinish} />
      ) : (
        <>
          <View style={styles.headerContainer}>
            <View style={styles.circleBackground}></View>
            <TouchableOpacity onPress={goBack}>
              <Ionicons name="arrow-back" size={28} color="#000" style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Almost <Text style={styles.blueText}>Finish</Text></Text>
          <Text style={styles.subtitle}>Complete the Opportunity</Text>
          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Wage</Text>
              <View style={styles.inputField}>
                <Text style={styles.dollarSign}>$</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Wage"
                  value={price}
                  onChangeText={setPrice}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Description</Text>
              <View style={styles.inputField}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Description"
                  value={description}
                  onChangeText={setDescription}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Planning</Text>
              <View style={styles.inputField}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Planning"
                  value={planning}
                  onChangeText={setPlanning}
                />
              </View>
            </View>
            <View style={styles.categoryContainer}>
              {category.map(cat => (
                <CategoryItem key={cat.id} item={cat} />
              ))}
            </View>
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={publishOpportunity}>
            <Text style={styles.nextButtonText}>Publish</Text>
          </TouchableOpacity>
          <CustomAlert
            visible={alertVisible}
            message={alertMessage}
            onClose={() => setAlertVisible(false)}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30, // Adjusted padding to margin to the top
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrowIcon: {
    marginRight: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  blueText: {
    color: '#0066FF',
  },
  content: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333',
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 20, // Adjusted padding
  },
  dollarSign: {
    fontSize: 18,
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 15, // Adjusted padding
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 100,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15, // Adjusted padding
    paddingHorizontal: 10, // Adjusted padding
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  selectedCategoryItem: {
    backgroundColor: '#25B4F8',
  },
  categoryItemText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#25B4F8',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 50, // Added margin to the top
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PartFour;
