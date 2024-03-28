import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, TextInput, StyleSheet, Dimensions } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import NavBar from './nav.jsx';
import { useRoute } from '@react-navigation/native'; // Import useRoute


const windowWidth = Dimensions.get('window').width;

export default function HomePage() {
  const profilePictureUrl = "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg";
  const name = "John";
  const images = [
    "https://lp-cms-production.imgix.net/2019-06/e41ea44f84a51473b215065226625602-tunisia.jpg?w=600&h=400",
    "https://observatoirevivreensemble.org/sites/default/files/styles/obs-screen-lg-16-9/public/av_bourguiba.jpg?itok=g-wRGuZQ",
    "https://www.planetware.com/wpimages/2021/06/tunisia-travel-guide-inspirational-ideas-planning-trip-tunisia-camel-caraval-sahara.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCm0u8CiaqM31-YliBAl_GwejhObMRax_Kw&usqp=CAU",
    "https://c4.wallpaperflare.com/wallpaper/868/182/441/desert-sand-dune-sky-sahara-wallpaper-preview.jpg"
  ];

  const [activeCategory, setActiveCategory] = useState(null);
  const [opportunities, setOpportunities] = useState([]);
  const route = useRoute(); // Use useRoute hook to access route params

  const { data } = route.params; // Access passed data object
  
  console.log(data, "home data");
  

  useEffect(() => {
    fetch("http://192.168.43.39:3000/opp/getallopportunities")
      .then((response) => response.json())
      .then((data) => setOpportunities(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
console.log(opportunities);
  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };

  const handleLikePress = (index) => {
    console.log(`Liked opportunity at index ${index}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={styles.stickyy}>
          <View style={styles.circleBackground}></View> 
          <View style={styles.header}>
            <TouchableOpacity style={styles.notificationButton}>
              <AntDesign name="bells" size={28} color="#2f80ed" />
            </TouchableOpacity>
            <Image source={{ uri: profilePictureUrl }} style={styles.profilePicture} />
          </View>

          {/* Welcome Message */}
          <View style={styles.messageContainer}>
            <Text style={styles.welcomeMessage}>Hey <Text style={styles.name}>{name}!</Text></Text>
            <Text style={styles.startExploring}>Let's start exploring</Text>
          </View>

          {/* Search Bar */}
          <View style={styles.searchBarContainer}>
            <TextInput placeholder="Search..." style={styles.searchBar} />
            <Feather name="search" size={24} color="#2f80ed" style={styles.searchIcon} />
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
        
        {/* Title: Enchanting Tunisia */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Enchanting{' '}
            <Text style={{ color: '#2f80ed' }}>Tunisia</Text>
            : Dive into North Africa's Hidden Gem
          </Text>
        </View>

        {/* Image Gallery */}
        <ScrollView horizontal style={styles.imageGallery}>
          {images.map((image, index) => (
            <View key={index} style={{ position: 'relative' }}>
              <Image source={{ uri: image }} style={styles.galleryImage} />
            </View>
          ))}
        </ScrollView>

        {/* Title: Featured Opportunities */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Featured Opportunities</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllButtonText}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Opportunities */}
        <ScrollView horizontal style={styles.opportunitiesContainer}>
          {opportunities.slice(0, 8).map((opportunity, index) => (
            <View key={index} style={styles.opportunityItem}>
              <Image source={{ uri: opportunity.image1 }} style={styles.opportunityImage} />
              <TouchableOpacity onPress={() => handleLikePress(index)} style={styles.likeButton}>
                <AntDesign name="hearto" size={20} style={styles.likeIcon} />
              </TouchableOpacity>
              <View style={styles.opportunityDescription}>
                <Text style={styles.opportunityTitle}>{opportunity.title}</Text>
                {opportunity.Ratereviews.map((rate, rateIndex) => (
                  <View key={rateIndex} style={styles.rateContainer}>
                    <AntDesign name="star" size={16} color="#FFD700" />
                    <Text style={styles.rate}>{rate.rate}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Title: Explore the beauty of scenery */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Explore the beauty of scenery</Text>
        </View>
        <Image source={{ uri: 'https://media3.giphy.com/media/3og0ISzBpn0nNJE3Ac/200w.gif' }} style={styles.gif} />

        {/* Explore More Opportunities */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Explore More Opportunities</Text>
        </View>
        <View style={styles.opportunitiesContainer}>
          <View style={styles.opportunityRow}>
            {opportunities.slice(8, 16).map((opportunity, index) => (
              <TouchableOpacity key={index} style={styles.opportunityCard}>
                <Image source={{ uri: opportunity.image1 }} style={styles.opportunityImage} />
                <View style={styles.opportunityCardContent}>
                  <Text style={styles.opportunityTitle}>{opportunity.title}</Text>
                  {opportunity.Ratereviews.map((rate, rateIndex) => (
                    <View key={rateIndex} style={styles.rateContainer}>
                      <AntDesign name="star" size={16} color="#FFD700" />
                      <Text style={styles.rate}>{rate.rate}</Text>
                    </View>
                  ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      
      <NavBar data={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gif: {
    width: '100%',
    height: 200,
    marginTop: 20,
    marginBottom: 20,
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
    marginTop:20
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#2f80ed',
    marginTop:20
  },
  messageContainer: {
    paddingHorizontal: 40,
    marginTop: 20,
    alignItems: 'flex-start',
    zIndex: 1,
    position: 'relative',
    top: -30,
  },
  stickyy: {
    backgroundColor: '#fff', 
    position: 'sticky',
    top: 0,
    zIndex: 1000, 
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
    fontSize: 20,
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
    overflow: 'hidden',
  },
  rate:{
    fontSize:16,
    marginLeft:5
  },
  searchBar: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  categoriesContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    maxHeight: 100,
    marginBottom: 10,
  },
  filterCategory: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
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
  titleContainer: {
    paddingHorizontal: 20,
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
  imageGallery: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    maxHeight: 150,
  },
  galleryImage: {
    width: 220,
    height: 220,
    borderRadius: 10,
    marginRight: 10,
  },
  likeButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeIcon: {
    color: '#fff',
  },
  viewAllButton: {
    backgroundColor: '#2f80ed',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  viewAllButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  opportunitiesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  opportunityItem: {
    marginRight: 20,
    alignItems: 'center',
    width: 300,
    borderWidth: 1,
    borderColor: '#2f80ed',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
  },
  opportunityImage: {
    width: 140,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  opportunityDescription: {
    flex: 1,
  },
  opportunityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  opportunityDescriptionText: {
    fontSize: 14,
    color: '#666',
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
  opportunityRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  opportunityCard: {
    width: '48%', // Adjust as needed
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  opportunityCardContent: {
    padding: 10,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    fontSize: 16,
    marginLeft: 5,
    color: '#666',
    
  },
});
