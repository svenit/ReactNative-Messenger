import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from '../src/screens/Intro.screen';
import LoginScreen from '../src/screens/Login.screen';
import SignupScreen from '../src/screens/Signup.screen';
import AppBottomStackNavigator from './AppBottomStackNavigator';


const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" options={{headerShown: false}} component={IntroScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="Signup" options={{headerShown: false}} component={SignupScreen} />
        <Stack.Screen name="App" options={{headerShown: false}} component={AppBottomStackNavigator} />
    </Stack.Navigator>
  );
}

export default AppStackNavigator;