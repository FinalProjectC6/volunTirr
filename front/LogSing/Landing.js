import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', imageUrl: 'https://i.pinimg.com/564x/e6/74/a3/e674a34b8e804855aa6d22dfacec00e0.jpg' },
  { id: '2', imageUrl: 'https://i.pinimg.com/564x/94/78/1c/94781c01f07ee974048524304b3d7d50.jpg' },
  { id: '3', imageUrl: 'https://i.pinimg.com/originals/26/89/fe/2689fe03ea41f8108f4ce4b87357b5b5.gif' },
];

const HorizontalCarousel = () => {
    const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </View>
  );

  const goToSignUp = () => {
    navigation.navigate('Getstarted');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 7 }} 
      />
      <TouchableOpacity style={styles.registerButt} onPress={goToSignUp}>
        <Text style={styles.buttText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    width: width * 0.8,
    marginHorizontal: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    overflow: "hidden", // Ensure images don't exceed item boundaries
  },
  image: {
    width: "100%",
    height: 600,
  },
  registerButt: {
    backgroundColor: "#05A4C8",
    width: width * 0.75,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center", // Center the button horizontally
  },
  buttText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    
  },
})

export default HorizontalCarousel;
