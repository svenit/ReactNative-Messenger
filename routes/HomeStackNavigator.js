import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from '../src/screens/Intro.screen';
import LoginScreen from '../src/screens/Login.screen';
import SignupScreen from '../src/screens/Signup.screen';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Intro" options={{headerShown: false}} component={IntroScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="Signup" options={{headerShown: false}} component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;