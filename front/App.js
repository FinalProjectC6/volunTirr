import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Image Section */}
      <View style={styles.profileSection}>
        {/* Placeholder for Profile Image */}
        <View style={styles.profileImageContainer}></View>
      </View>

      {/* Greeting Section */}
      <View style={styles.greetingSection}>
        <Text style={styles.greeting}>Hey, Jonathan!</Text>
        <Text style={styles.exploring}>Let's start exploring</Text>
      </View>

      {/* Search Bar Section */}
      <View style={styles.searchBarSection}>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>

      {/* Featured Opportunities Section */}
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Opportunities</Text>
        <ScrollView horizontal style={styles.horizontalScroll}>
          {/* Placeholder for Opportunity Images */}
          <Image style={styles.opportunityImage} source={{ uri: 'https://media.gettyimages.com/id/1394428970/fr/photo/a-surface-level-sunrise-view-of-amsterdam-at-dawn.jpg?s=612x612&w=gi&k=20&c=EODYqGlDpus4rBXHUuGFIIcMiSuFVANVIYJczEHxNtY=' }} />
          {/* Add more images as needed */}
        </ScrollView>
      </View>

      {/* Explore the Beautiful Scenery Section */}
      <View style={styles.scenerySection}>
        <Text style={styles.sectionTitle}>Explore the beautiful scenery</Text>
        {/* Placeholder for Scenery Image */}
        <Image style={styles.sceneryImage} source={{ uri: 'https://media.gettyimages.com/id/1394428970/fr/photo/a-surface-level-sunrise-view-of-amsterdam-at-dawn.jpg?s=612x612&w=gi&k=20&c=EODYqGlDpus4rBXHUuGFIIcMiSuFVANVIYJczEHxNtY=' }} />
      </View>

      {/* Explore More Opportunities Section */}
      <View style={styles.moreOpportunitiesSection}>
        <Text style={styles.sectionTitle}>Explore more opportunities</Text>
        <ScrollView horizontal style={styles.horizontalScroll}>
          {/* Placeholder for More Opportunity Images */}
          <Image style={styles.opportunityImage} source={{ uri: 'https://media.gettyimages.com/id/1394428970/fr/photo/a-surface-level-sunrise-view-of-amsterdam-at-dawn.jpg?s=612x612&w=gi&k=20&c=EODYqGlDpus4rBXHUuGFIIcMiSuFVANVIYJczEHxNtY=' }} />
          {/* Add more images as needed */}
        </ScrollView>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigationSection}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Background color of the app
  },
  profileSection: {
    alignItems: 'flex-end',
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#CCC', // Placeholder color for profile image space
  },
  greetingSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Dark text color for the greeting
  },
  exploring: {
    fontSize: 22,
    color: '#333', // Dark text color for the sub-greeting
  },
  searchBarSection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#DDD', // Light border color for the search bar
    borderRadius: 20,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#FFF', // White background color for the search bar
  },
  featuredSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Dark text color for section titles
    marginLeft: 20,
    marginBottom: 15,
  },
  horizontalScroll: {
    paddingLeft: 20,
  },
  opportunityImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 15,
  },
  scenerySection: {
    marginBottom: 20,
  },
  sceneryImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  moreOpportunitiesSection: {
    marginBottom: 20,
  },
  navigationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  navButton: {
    backgroundColor: '#25B4F8', // Blue background color for navigation buttons
    padding: 15,
    borderRadius: 25,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF', // White text color for navigation buttons
  },
});

export default App;








// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>yo  </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  
// });


















