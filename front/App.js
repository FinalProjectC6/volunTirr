import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './LogSing/Landing.js';
import sign from './LogSing/sign.js';
import Login from './LogSing/Login.js';
import Getstarted from './LogSing/Getstarted.js'
import Forgpsw from './LogSing/Forgpsw.js';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Landing" 
        component={Landing}/>
        <Stack.Screen name="sign" component={sign} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Getstarted" component={Getstarted} options={{headerShown:false}} />
        <Stack.Screen name="Forgpsw" component={Forgpsw} options={{headerShown:false}} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
