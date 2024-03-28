import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import MaterialCommunityIcons from Expo icons
import History from './history.jsx'; // Import the History component

const Request = () => {
  const [seekers, setSeekers] = useState([
    { id: 1, name: 'Seeker 700', status: 'pending', image: 'https://m.media-amazon.com/images/M/MV5BYWFlMmVhZjAtOGMzNS00MzEyLTkzMWEtN2M1MDgzODI5Njk0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg', showChatIcon: false },
    { id: 2, name: 'Seeker 200', status: 'pending', image: 'https://m.media-amazon.com/images/M/MV5BYWFlMmVhZjAtOGMzNS00MzEyLTkzMWEtN2M1MDgzODI5Njk0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg', showChatIcon: false },
    // Add more seekers...
    { id: 3, name: 'Seeker 300', status: 'pending', image: 'https://m.media-amazon.com/images/M/MV5BYWFlMmVhZjAtOGMzNS00MzEyLTkzMWEtN2M1MDgzODI5Njk0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg', showChatIcon: false },
    { id: 4, name: 'Seeker 400', status: 'pending', image: 'https://m.media-amazon.com/images/M/MV5BYWFlMmVhZjAtOGMzNS00MzEyLTkzMWEtN2M1MDgzODI5Njk0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg', showChatIcon: false },
    { id: 5, name: 'Seeker 5000', status: 'pending', image: 'https://m.media-amazon.com/images/M/MV5BYWFlMmVhZjAtOGMzNS00MzEyLTkzMWEtN2M1MDgzODI5Njk0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg', showChatIcon: false },
    { id: 6, name: 'Seeker 600', status: 'pending', image: 'https://m.media-amazon.com/images/M/MV5BYWFlMmVhZjAtOGMzNS00MzEyLTkzMWEtN2M1MDgzODI5Njk0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg', showChatIcon: false },
    { id: 7, name: 'Seeker 700', status: 'pending', image: 'https://m.media-amazon.com/images/M/MV5BYWFlMmVhZjAtOGMzNS00MzEyLTkzMWEtN2M1MDgzODI5Njk0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg', showChatIcon: false },
    { id: 8, name: 'Seeker 800', status: 'pending', image: 'https://m.media-amazon.com/images/M/MV5BYWFlMmVhZjAtOGMzNS00MzEyLTkzMWEtN2M1MDgzODI5Njk0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg', showChatIcon: false },
    { id: 9, name: 'Seeker 900', status: 'pending', image: 'https://m.media-amazon.com/images/M/MV5BYWFlMmVhZjAtOGMzNS00MzEyLTkzMWEtN2M1MDgzODI5Njk0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg', showChatIcon: false },
    { id: 10, name: 'Seeker 100', status: 'pending', image: 'https://m.media-amazon.com/images/M/MV5BYWFlMmVhZjAtOGMzNS00MzEyLTkzMWEtN2M1MDgzODI5Njk0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg', showChatIcon: false },
  ]);
  const [acceptedSeekers, setAcceptedSeekers] = useState([]);
  const [declinedSeekers, setDeclinedSeekers] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleAccept = (seekerId) => {
    console.log('Accepted seeker with ID:', seekerId);
    const updatedSeekers = seekers.map(seeker => {
      if (seeker.id === seekerId) {
        return { ...seeker, showChatIcon: true };
      }
      return seeker;
    });
    setSeekers(updatedSeekers);
    setAcceptedSeekers([...acceptedSeekers, seekerId]);
  };

  const handleDecline = (seekerId) => {
    console.log('Declined seeker with ID:', seekerId);
    setDeclinedSeekers([...declinedSeekers, seekerId]);
  };

  const handleHistoryPress = () => {
    setShowHistory(true);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.topContainer}>
        <Text style={styles.heading}>Seeker Requests</Text>
        <TouchableOpacity style={styles.historyIconContainer} onPress={handleHistoryPress}>
          <MaterialCommunityIcons name="history" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.whiteSpace}></View>
      <ScrollView contentContainerStyle={styles.container}>
        {seekers.map(seeker => (
          <View key={seeker.id} style={styles.seekerContainer}>
            <Image source={{ uri: seeker.image }} style={styles.seekerImage} />
            <Text style={styles.seekerName}>{seeker.name}</Text>
            <View style={styles.buttonContainer}>
              {seeker.showChatIcon ? (
                <TouchableOpacity onPress={() => console.log('Chat icon pressed')}>
                  <MaterialCommunityIcons name="chat-processing" size={40} color="rgba(0, 0, 255, 0.3)" style={styles.icon} />
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity onPress={() => handleAccept(seeker.id)}>
                    <MaterialCommunityIcons name="check-circle" size={40} color="#32CD32" style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDecline(seeker.id)}>
                    <MaterialCommunityIcons name="close-circle" size={40} color="#FF6347" style={styles.icon} />
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
      {showHistory && (
        <History acceptedSeekers={acceptedSeekers} declinedSeekers={declinedSeekers} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0, // Adjust padding top for iOS
    paddingBottom: Platform.OS === 'ios' ? 70 : 0, // Adjust padding bottom for iOS
    position: 'relative', // Ensure that history icon container is positioned relative to wrapper
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  whiteSpace: {
    height: 20,
    backgroundColor: 'f0f0f0',
  },
  container: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24, // Increase font size
    fontWeight: 'bold',
  },
  seekerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20, // Increase margin bottom
  },
  seekerImage: {
    width: 60, // Increase image width
    height: 60, // Increase image height
    borderRadius: 30, // Increase border radius
    marginRight: 20, // Increase margin right
  },
  seekerName: {
    fontSize: 18, // Increase font size
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10, // Increase horizontal margin
  },
  historyIconContainer: {
    // position: 'absolute',
    // top: Platform.OS === 'ios' ? 20 : 30, // Adjust top position for iOS
    // right: 20, // Increase right position
    // zIndex: 1, // Ensure history icon is above the history component
  },
});

export default Request;
