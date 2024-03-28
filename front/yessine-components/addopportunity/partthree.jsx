import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const PartThree = () => {
  const navigation = useNavigation();
  const [pickedImages, setPickedImages] = useState([]);
  const route = useRoute();
  const { opportunityData } = route.params;

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need media library permissions to make this work!');
      }
    })();
  }, []);

  const pickImages = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        multiple: true,
      });
  
  
      if (result && !result.canceled && result.assets && result.assets.length > 0) {
        // Images selected
        const selectedImages = result.assets.map(asset => asset.uri);
        console.log('Selected images:', selectedImages);
        setPickedImages(prevImages => [...prevImages, ...selectedImages]);
      } else {
        console.log('No images selected.');
      }
  
    } catch (error) {
      console.log('Error picking images: ', error);
    }
  };
  
  const deleteImage = (index) => {
    const newImages = [...pickedImages];
    newImages.splice(index, 1);
    setPickedImages(newImages);
  };

  const goNext = () => {
    const image1 = pickedImages[0] || null;
    const image2 = pickedImages[1] || null;
    const image3 = pickedImages.length >= 3 ? pickedImages[2] : null;
    const image4 = pickedImages.length >= 4 ? pickedImages[3] : null;
  
    navigation.navigate('PartFour', {
      opportunityData: {
        ...opportunityData,
        image1,
        image2,
        image3,
        image4,
      }
    });
  };
  
  

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.circleBackground}></View>

        <View style={styles.headerContainer}>
          <Ionicons name="arrow-back" size={28} color="#000" style={styles.arrowIcon} onPress={goBack} />
          <Text style={styles.header}>Add Listing</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, styles.blueText, { fontSize: 24 }]}>Add</Text>
          <Text style={[styles.titleText, { fontSize: 22 }]}>Photos</Text>
          <Text style={[styles.titleText, styles.blueText, { fontSize: 24 }]}>to Your Opportunity</Text>
        </View>
        <View style={styles.imageContainer}>
          {pickedImages.map((image, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{ uri: image }} style={styles.image} />
              <TouchableOpacity style={styles.deleteButton} onPress={() => deleteImage(index)}>
                <Ionicons name="close-circle" size={24} color="#FF0000" />
              </TouchableOpacity>
            </View>
          ))}
          {pickedImages.length < 4 && (
            <TouchableOpacity style={styles.addButton} onPress={pickImages}>
              <Ionicons name="add-circle" size={48} color="#25B4F8" />
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={goNext}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
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
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrowIcon: {
    marginRight: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40, // Increased space between title and Add button
  },
  titleText: {
    fontSize: 24, // Increased title font size
    marginRight: 10, // Increased space between words in title
  },
  blueText: {
    color: '#25B4F8',
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
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageWrapper: {
    marginBottom: 20,
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },
  addButton: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#25B4F8',
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60, // Increased margin to the bottom
  },
  nextButton: {
    backgroundColor: '#25B4F8',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: windowWidth / 2 - 75, // Centered horizontally
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PartThree;
