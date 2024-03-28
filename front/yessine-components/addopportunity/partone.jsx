import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, StyleSheet, Dimensions, Alert, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const AddListing = () => {
  const [title, setTitle] = useState('');
  const [number_of_seekers, setNumberofseekers] = useState('');
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [logistics, setLogistics] = useState([]);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setIsFormComplete(title && number_of_seekers && start && end && logistics);
  }, [title, number_of_seekers, start, end, logistics]);

  const next = () => {
    navigation.navigate('PartTwo', {
      opportunityData: {
        title,
        start,
        end,
        logistics,
        number_of_seekers: parseInt(number_of_seekers),
        ProviderId:1
      }
    });
  };

  const toggleLogistic = (logistic) => {
    setLogistics(prevLogistics => prevLogistics === logistic ? '' : logistic);
  };

  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  const handleDayPress = (day) => {
    if (!start) {
      setStart(day.dateString);
    } else if (!end) {
      if (new Date(day.dateString) >= new Date(start)) {
        setEnd(day.dateString);
        setCalendarVisible(false);
      } else {
        Alert.alert('Invalid Date Range', 'End date must be after start date.');
      }
    } else {
      setStart(day.dateString);
      setEnd(null);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.circleBackground}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <Ionicons name="arrow-back" size={28} color="#000" style={styles.arrowIcon} onPress={goBack}/>
          <Text style={styles.header}>Add Listing</Text>
        </View>
        <Text style={styles.greeting}>Please fill in the details of your opportunity</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Enter Title"
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <SectionHeader text="Logistics Provided" />
        <ButtonGroup buttons={['Accommodation', 'Meals', 'Laptop', 'Transportation']} selectedLogistics={logistics} toggleLogistic={toggleLogistic} />
        <SectionHeader text="Number of Seekers Needed" />
        <TextInput
          style={styles.titleInput}
          placeholder="Enter Number"
          value={number_of_seekers}
          onChangeText={setNumberofseekers}
          keyboardType="numeric"
        />
        <View style={styles.calendarContainer}>
          <TouchableOpacity onPress={toggleCalendar} style={styles.calendarButton}>
            <Text style={styles.calendarButtonText}>Select Dates</Text>
          </TouchableOpacity>
          {calendarVisible && (
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{
                [start]: { startingDay: true, color: '#25B4F8', textColor: '#fff' },
                [end]: { endingDay: true, color: '#25B4F8', textColor: '#fff' },
              }}
            />
          )}
          {(start || end) && (
            <View style={styles.selectedDatesContainer}>
              {start && <Text style={styles.selectedDatesText}>Start Date: {start}</Text>}
              {end && <Text style={styles.selectedDatesText}>End Date: {end}</Text>}
            </View>
          )}
        </View>
        <Text style={styles.buttonSpace}></Text> 
        <View style={styles.nextButtonContainer}>
          <TouchableOpacity
            style={[styles.nextButton, { opacity: isFormComplete ? 1 : 0.5 }]}
            onPress={next}
            disabled={!isFormComplete}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const SectionHeader = ({ text }) => (
  <Text style={styles.sectionHeader}>{text}</Text>
);

const ButtonGroup = ({ buttons, selectedLogistics, toggleLogistic }) => (
  <View style={styles.buttonGroup}>
    {buttons.map((logistic, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.button,
          {
            backgroundColor: selectedLogistics.includes(logistic) ? '#25B4F8' : '#fff',
            borderRadius: selectedLogistics.includes(logistic) ? 20 : 25
          }
        ]}
        onPress={() => toggleLogistic(logistic)}
      >
        <Text style={[styles.buttonText, { color: selectedLogistics.includes(logistic) ? '#fff' : '#000' }]}>{logistic}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrowIcon: {
    marginRight: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 50,
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
  greeting: {
    color: '#888',
    marginBottom: 30,
    fontSize: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 15,
    fontSize: 18,
  },
  sectionHeader: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
  },
  calendarContainer: {
    marginBottom: 20,
  },
  calendarButton: {
    backgroundColor: '#25B4F8',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  calendarButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  selectedDatesContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedDatesText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonSpace: {
    height: 10, 
  },
  nextButtonContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  nextButton: {
    backgroundColor: '#25B4F8',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AddListing;
