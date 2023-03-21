import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';//'./screens/HomeScreen';
import GameScreen from './GameScreen';//'./screens/GameScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Memory Game' }}
        />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{ title: 'Memory Game' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
