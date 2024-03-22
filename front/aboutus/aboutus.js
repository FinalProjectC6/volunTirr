import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;


const AboutUs = () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.circleBackground}></View>
        <Text style={styles.header}>About Us</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Rules</Text>
          <View style={styles.sectionContent}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg'
              }}
              style={styles.image}
            />
            <View style={styles.textContent}>
              <Text style={styles.content}>
                Here you can describe the rules of your organization or project. You can list them out or describe them in
                detail.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Vision</Text>
          <View style={styles.sectionContent}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg'
              }}
              style={styles.image}
            />
            <View style={styles.textContent}>
              <Text style={styles.content}>
                Describe the vision of your organization or project in this section. What are the long-term goals or
                aspirations?
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <View style={styles.sectionContent}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg'
              }}
              style={styles.image}
            />
            <View style={styles.textContent}>
              <Text style={styles.content}>
                Outline the mission statement of your organization or project here. What is its purpose and what does it aim
                to achieve?
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Team</Text>
          <View style={styles.teamContainer}>
            <View style={styles.memberContainer}>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/150'
                }}
                style={styles.memberImage}
              />
              <Text style={styles.memberName}>yessine</Text>
            </View>
            <View style={styles.memberContainer}>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/150'
                }}
                style={styles.memberImage}
              />
              <Text style={styles.memberName}>aziz derwish</Text>
            </View>
            <View style={styles.memberContainer}>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/150'
                }}
                style={styles.memberImage}
              />
              <Text style={styles.memberName}>takwa channoufi</Text>
            </View>
            <View style={styles.memberContainer}>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/150'
                }}
                style={styles.memberImage}
              />
              <Text style={styles.memberName}>eya</Text>
            </View>
            <View style={styles.memberContainer}>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/150'
                }}
                style={styles.memberImage}
              />
              <Text style={styles.memberName}>dali</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5'
    },
    header: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#252B5C'
    },
    section: {
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
      padding: 10,
      borderRadius: 10
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#252B5C'
    },
    sectionContent: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    textContent: {
      flex: 1,
      marginLeft: 10
    },
    content: {
      fontSize: 16,
      color: '#666'
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 10
    },
    teamContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    memberContainer: {
      width: '48%',
      marginBottom: 20,
      backgroundColor: '#EAEAEA',
      borderRadius: 10,
      padding: 10,
      alignItems: 'center'
    },
    memberImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10
    },
    memberName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#252B5C'
    },
    circleBackground: {
      width: windowWidth * 0.8,
      height: windowWidth * 0.8,
      borderRadius: (windowWidth * 0.8) / 2,
      backgroundColor: 'rgba(47, 128, 237, 0.3)', 
      position: 'absolute',
      top: -windowWidth * 0.4,
      left: -windowWidth * 0.4,
    }
  });
  
  export default AboutUs;
  