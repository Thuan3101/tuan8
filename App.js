import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Screen1 from '../tuan8/Src/Screen1';
import Screen2 from '../tuan8/Src/Screen2';
import Screen3 from '../tuan8/Src/Screen3';
import Screen4 from '../tuan8/Src/Screen4';

var Stack = createNativeStackNavigator();
function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown: false}}/>
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;



