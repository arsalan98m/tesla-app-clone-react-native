import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home-screen';
import CarDetailScreen from './src/screens/car-details-screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Detail'
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={CarDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
