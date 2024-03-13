import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, TextInput, Button, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import NavBar from './components/nav.js';
import MapView, { Marker } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel'; // Import the Carousel component

const dummyOpportunity = {
  title: 'Software Engineer',
  location: 'San Francisco, CA',
  category: 'Technology',
  images: [
    require('./assets/image1.png'),
    require('./assets/image2.png'),
    require('./assets/az.png'),
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam eu nunc fermentum tincidunt. Sed vestibulum efficitur nisi, ac fermentum odio. Nullam euismod, quam sit amet bibendum tristique, dolor mi interdum nunc, vel egestas ex nisl vel justo.',
  planning:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu justo nec orci tincidunt consequat vel vel magna. Ut rhoncus auctor velit, sit amet tincidunt turpis congue vel. Integer in posuere leo. Sed tristique ligula ac libero fermentum, vitae fermentum felis sollicitudin.',
};

const comments = [
  {
    id: 1,
    user: 'John Doe',
    text: 'This opportunity looks great! I\'m interested in applying.',
  },
  {
    id: 2,
    user: 'Jane Smith',
    text: 'I applied for this position last month and had a positive experience. Highly recommended!',
  },
];

export default function OpportunityDetailPage({ route, navigation }) {
  const opportunity = dummyOpportunity;
  const [rating, setRating] = useState(3.5);
  const [commentText, setCommentText] = useState('');

  const { width: screenWidth } = Dimensions.get('window');

  const renderImageItem = ({ item }) => {
    return (
      <Image source={item} style={styles.opportunityImage} />
    );
  };

  const submitComment = () => {
    if (commentText.trim() === '') {
      Alert.alert('Error', 'Please enter a comment.');
      return;
    }

    setCommentText('');

    Alert.alert('Success', 'Your comment has been submitted.');
  };

  return (
    <View style={styles.container}>
      {/* Blue Circle */}
      <View style={styles.circleBackground}></View>

      {/* Return Arrow */}
      <TouchableOpacity style={styles.returnArrow} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={28} color="#2f80ed" />
      </TouchableOpacity>

      {/* Carousel for images */}
      <View style={styles.carouselContainer}>
        <Carousel
          data={opportunity.images}
          renderItem={renderImageItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          layout={'default'}
          loop={true}
          autoplay={true}
          autoplayDelay={2000}
          autoplayInterval={3000}
        />
      </View>

      <View style={styles.opportunityTitleContainer}>
        <Text style={styles.opportunityTitle}>{opportunity.title}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.opportunityInfo}>
          <Text style={styles.opportunityLocation}>{opportunity.location}</Text>
          <Text style={styles.opportunityCategory}>{opportunity.category}</Text>
        </View>

        <Text style={styles.opportunityDescription}>{opportunity.description}</Text>

        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>Opportunity Location</Text>
          <AntDesign name="enviromento" size={24} color="#2f80ed" style={styles.locationIcon} />
        </View>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Your Location"
            description="This is your current location"
          />
        </MapView>

        <View style={styles.reviewContainer}>
          <Text style={styles.reviewTitle}>User Reviews</Text>
          <View style={styles.ratingContainer}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={rating}
              starSize={25}
              fullStarColor="#FFD700"
              emptyStarColor="#FFD700"
              starSpacing={5}
            />
          </View>
          <Text style={styles.averageRating}>Average Rating: {rating.toFixed(1)}</Text>
        </View>

        <View style={styles.planningContainer}>
          <Text style={styles.planningTitle}>Planning</Text>
          <Text style={styles.planningText}>{opportunity.planning}</Text>
        </View>

        <View style={styles.commentContainer}>
          <Text style={styles.commentTitle}>Comments</Text>
          {comments.map((comment) => (
            <View key={comment.id} style={styles.comment}>
              <Text style={styles.commentUser}>{comment.user}:</Text>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.submitCommentContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Enter your comment..."
            onChangeText={setCommentText}
            value={commentText}
            multiline={true}
          />
          <Button title="Submit" onPress={submitComment} />
        </View>

        <TouchableOpacity style={styles.applyButton} onPress={() => alert('Application submitted!')}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>

        <NavBar />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  circleBackground: {
    position: 'absolute',
    top: -180,
    left: -180,
    width: 450,
    height: 450,
    borderRadius: 225,
    backgroundColor: 'rgba(47, 128, 237, 0.2)',
  },
  returnArrow: {
    position: 'absolute',
    top: 40,
    left: 28,
    zIndex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  carouselContainer: {
    marginTop: 40, 
    height: 250,
    overflow: 'hidden',
  },
  opportunityTitleContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  opportunityTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f80ed',
    marginRight:"35%"
  },
  opportunityImage: {
    width: '90%',
    height: '90%',
    borderRadius:"10%",
    marginTop:"8%",
    marginLeft:"4%"
  },
  opportunityInfo: {
    marginBottom: 20,
  },
  opportunityLocation: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  opportunityCategory: {
    fontSize: 14,
    color: '#2f80ed',
    marginTop: 5,
  },
  opportunityDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  locationIcon: {
    marginRight: 5,
  },
  map: {
    height: 200,
    marginBottom: 20,
  },
  reviewContainer: {
    marginBottom: 20,
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  ratingContainer: {
    backgroundColor: '#FF6584',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  averageRating: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  planningContainer: {
    marginBottom: 20,
  },
  planningTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  planningText: {
    fontSize: 16,
    color: '#555',
  },
  commentContainer: {
    marginBottom: 20,
  },
  commentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  comment: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  commentUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  commentText: {
    fontSize: 16,
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#2f80ed',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  submitCommentContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    minHeight: 40,
  },
});