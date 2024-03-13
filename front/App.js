import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './yessine-components/homepage.jsx';
import NavBar from './yessine-components/nav';


export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
      
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


















