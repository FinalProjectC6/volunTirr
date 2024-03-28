import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const History = ({ acceptedSeekers, declinedSeekers }) => {
  return (
    <View style={styles.historyContainer}>
      <View style={styles.historySection}>
        <Text style={styles.historyHeading}>Accepted Seekers</Text>
        <ScrollView>
          {acceptedSeekers.map(seekerId => (
            <Text key={seekerId}>{`Seeker ID: ${seekerId} - Accepted`}</Text>
          ))}
        </ScrollView>
      </View>
      <View style={styles.historySection}>
        <Text style={styles.historyHeading}>Declined Seekers</Text>
        <ScrollView>
          {declinedSeekers.map(seekerId => (
            <Text key={seekerId}>{`Seeker ID: ${seekerId} - Declined`}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    zIndex: 1,
  },
  historySection: {
    marginBottom: 20,
  },
  historyHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default History;
