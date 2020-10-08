import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import IntroScreen from '../src/screens/Intro.screen';
import LoginScreen from '../src/screens/Login.screen';
import SignupScreen from '../src/screens/Signup.screen';
import AppBottomStackNavigator from './AppBottomStackNavigator';
import ConversationScreen from '../src/screens/Conversation.screen';


const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          options={{
            headerShown: false
          }}
          component={IntroScreen}
        />
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          options={{
            headerShown: false
          }}
          component={SignupScreen}
        />
        <Stack.Screen
          name="App"
          options={{
            headerShown: false
          }}
          component={AppBottomStackNavigator}
        />
        <Stack.Screen
          name="Conversation"
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
          }}
          component={ConversationScreen}
        />
    </Stack.Navigator>
  );
}

export default AppStackNavigator;