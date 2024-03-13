import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, Platform } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import NavBar from './nav.js'
export default function OpportunitiesPage({ navigation }) {
  const opportunities = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'San Francisco, CA',
      image: 'https://example.com/software_engineer_image.jpg',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'UX Designer',
      location: 'New York, NY',
      image: 'https://example.com/ux_designer_image.jpg',
      category: 'Design',
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      location: 'Los Angeles, CA',
      image: 'https://example.com/marketing_specialist_image.jpg',
      category: 'Marketing',
    },
    {
      id: 4,
      title: 'Project Manager',
      location: 'Chicago, IL',
      image: 'https://example.com/project_manager_image.jpg',
      category: 'Management',
    },
  ];

  const categories = ['All', 'Technology', 'Design', 'Marketing', 'Management'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOpportunities = opportunities.filter(
    (opportunity) =>
      (activeCategory === 'All' || opportunity.category === activeCategory) &&
      (opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opportunity.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleBackground}></View>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={28} color="#2f80ed" />
        </TouchableOpacity>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.pageTitle}>Opportunities</Text>
        <Text style={styles.startExploring}>Explore and find your next opportunity</Text>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Feather name="search" size={24} color="#2f80ed" style={styles.searchIcon} />
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, activeCategory === category && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress(category)}>
            <Text style={[styles.categoryButtonText, activeCategory === category && styles.activeCategoryButtonText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.opportunitiesContainer}>
        {filteredOpportunities.map((opportunity) => (
          <TouchableOpacity
            key={opportunity.id}
            style={styles.opportunityCard}
            onPress={() => navigation.navigate('OpportunityDetail', { opportunity })}>
            <Image source={{ uri: opportunity.image }} style={styles.opportunityImage} />
            <View style={styles.opportunityInfo}>
              <Text style={styles.opportunityTitle}>{opportunity.title}</Text>
              <Text style={styles.opportunityLocation}>{opportunity.location}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <NavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
  circleBackground: {
    position: 'absolute',
    top: -150,
    left: -150,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'rgba(47, 128, 237, 0.2)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    marginRight: 20,
  },
  messageContainer: {
    paddingHorizontal: 40,
    marginTop: 20,
    alignItems: 'flex-start',
    zIndex: 1,
    position: 'relative',
    top: -50,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  startExploring: {
    fontSize: 20,
    color: '#555',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#2f80ed',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#fff',
  },
  searchIcon: {
    padding: 10,
    backgroundColor: '#2f80ed',
    borderRadius: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  categoryButtonText: {
    color: '#2f80ed',
    fontWeight: 'bold',
  },
  activeCategoryButton: {
    backgroundColor: '#2f80ed',
  },
  activeCategoryButtonText: {
    color: '#fff',
  },
  opportunitiesContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  opportunityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  opportunityImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  opportunityInfo: {
    flex: 1,
    padding: 10,
  },
  opportunityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  opportunityLocation: {
    fontSize: 14,
    color: '#555',
  },
  categoriesContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20, // Adjusted padding
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 5, // Adjusted margin to create space between lines
  },
  categoryButtonText: {
    color: '#2f80ed',
    fontWeight: 'bold',
  },
  activeCategoryButton: {
    backgroundColor: '#2f80ed',
  },
  activeCategoryButtonText: {
    color: '#fff',
  },
});