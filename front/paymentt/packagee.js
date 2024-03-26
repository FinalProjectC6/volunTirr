import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { IP } from '../ip.json'


const windowWidth = Dimensions.get('window').width

const Packagee = () => {
  const navigation = useNavigation();
  const [data, setdata] = useState([])

  const handlePackageSelection = (pack) => {
    navigation.navigate('payment', {pack});
  };
  useEffect(() => {
    axios.get(`http:/${IP}:3000/package/getallpack`)
    .then((res)=>{
      setdata(res.data)
    })
  }, [])


  return (
    <ScrollView style={styles.container}>
      <View style={styles.circleBackground}></View>
      <Text style={styles.header}>Choose Your Package</Text>
      <TouchableOpacity style={styles.packageContainer} onPress={() =>handlePackageSelection(data[0])}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-cq3PgJTRUUVXJsL9dgTXV5B2jUdOtfJmOTeXWVT171JIqpuea8EOli1d3saro7Itco&usqp=CAU' }} style={styles.packageImage} />
        <Text style={styles.packageTitle}>Bronze Package</Text>
        <Text style={styles.packageDescription}>Basic features included</Text>
        <Text style={styles.packagePrice}>$99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.packageContainer} onPress={() =>handlePackageSelection(data[1])}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJALpICu0dIKTbkOn7G9FG64H7zSXcYH-sJ6NcYvlt47TVBmnzyxDLlJhs3JhmmOysEY&usqp=CAU' }} style={styles.packageImage} />
        <Text style={styles.packageTitle}>Gold Package</Text>
        <Text style={styles.packageDescription}>Additional features included</Text>
        <Text style={styles.packagePrice}>$199</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.packageContainer} onPress={() =>handlePackageSelection(data[2])}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum0Dz1YQ7XwNLsV-qlPi78ksFCOMZEcjFUDbkngcDerLu2gF9VY-jt6QWlkHVwlJM_nw&usqp=CAU' }} style={styles.packageImage} />
        <Text style={styles.packageTitle}>Premium Package</Text>
        <Text style={styles.packageDescription}>All premium features included</Text>
        <Text style={styles.packagePrice}>$299</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  circleBackground: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.68,
    borderRadius: (windowWidth * 0.8) / 2,
    backgroundColor: 'rgba(47, 128, 237, 0.3)',
    position: 'absolute',
    top: -windowWidth * 0.4,
    left: -windowWidth * 0.4,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
  },
  packageContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    elevation: 7,
    alignItems: 'center',
  },
  packageImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  packageDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  packagePrice: {
    fontSize: 16,
  },
});

export default Packagee;
