import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet, Platform, Dimensions } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons'; // Assuming you're using Expo

const windowWidth = Dimensions.get('window').width;

const FilteredOpp = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };

  return (
    <View style={styles.container}>
      {/* Circle Background */}
      <View style={styles.circleBackground}></View>

      {/* Profile Picture and Notification Icon */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.notificationButton}>
          <AntDesign name="bells" size={28} color="#2f80ed" />
        </TouchableOpacity>
        <Image
          source={{ uri:"https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg"}} // Use the provided URL for the profile picture
          style={styles.profilePicture}
        />
      </View>

      {/* Welcome Message */}
      <View style={styles.messageContainer}>
        <Text style={styles.welcomeMessage}>Hey <Text style={styles.name}>jhon!</Text></Text>
        <Text style={styles.startExploring}>Let's start exploring</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.searchBar}
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Feather name="search" size={24} color="#2f80ed" />
        </TouchableOpacity>
      </View>

      {/* Filter Categories */}
      <ScrollView horizontal style={styles.categoriesContainer}>
        <TouchableOpacity
          style={[styles.filterCategory, activeCategory === 'Technology' && styles.activeCategory]}
          onPress={() => handleCategoryPress('Technology')}
        >
          <Text style={[styles.filterCategoryText, activeCategory === 'Technology' && styles.activeCategoryText]}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterCategory, activeCategory === 'Design' && styles.activeCategory]}
          onPress={() => handleCategoryPress('Design')}
        >
          <Text style={[styles.filterCategoryText, activeCategory === 'Design' && styles.activeCategoryText]}>Design</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterCategory, activeCategory === 'Management' && styles.activeCategory]}
          onPress={() => handleCategoryPress('Management')}
        >
          <Text style={[styles.filterCategoryText, activeCategory === 'Management' && styles.activeCategoryText]}>Management</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterCategory, activeCategory === 'Marketing' && styles.activeCategory]}
          onPress={() => handleCategoryPress('Marketing')}
        >
          <Text style={[styles.filterCategoryText, activeCategory === 'Marketing' && styles.activeCategoryText]}>Marketing</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 40 : 0, // Adjusting for iOS status bar
  },
  circleBackground: {
    position: 'absolute',
    top: -100, // Adjust position to make it higher
    left: -100, // Adjust position to make it wider
    width: 300, // Adjust width to make it wider
    height: 300, // Adjust height to make it higher
    borderRadius: 150, // Make it a circle
    backgroundColor: 'rgba(47, 128, 237, 0.2)', // Transparent blue color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'flex-end',
  },
  notificationButton: {
    marginRight: 20,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#2f80ed',
  },
  messageContainer: {
    paddingHorizontal: 40, // Increased horizontal padding
    marginTop: 20,
    alignItems: 'flex-start', // Align to the left
    zIndex: 1, // Ensure the message container stays above the circle background
    position: 'relative', // Enable positioning relative to the parent
    top: -30, // Adjust the vertical position to partially overlap with the circle background
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  name: {
    color: '#2f80ed',
  },
  startExploring: {
    fontSize: 20, // Increased font size
    color: '#555',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden', // Hide the search icon if it exceeds the border radius
  },
  searchBar: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  searchIconContainer: {
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  categoriesContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    maxHeight: 40, // Set max height for filter categories
    marginBottom: 30, // Add margin at the bottom
  },
  filterCategory: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc', // Light border color
  },
  filterCategoryText: {
    color: '#333',
  },
  activeCategory: {
    backgroundColor: '#2f80ed',
  },
  activeCategoryText: {
    color: '#fff',
  },
});

export default FilteredOpp;
