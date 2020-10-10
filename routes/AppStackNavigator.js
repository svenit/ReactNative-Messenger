import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import IntroScreen from '../src/screens/Intro.screen';
import LoginScreen from '../src/screens/Login.screen';
import SignupScreen from '../src/screens/Signup.screen';
import AppBottomStackNavigator from './AppBottomStackNavigator';
import ConversationScreen from '../src/screens/Conversation.screen';
import SearchScreen from '../src/screens/Search.screen';
import ProfileScreen from '../src/screens/Profile.screen';

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
        <Stack.Screen
          name="Search"
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitle: 'Tin nhắn mới'
          }}
          component={SearchScreen}
        />
        <Stack.Screen
          name="Profile"
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
          }}
          component={ProfileScreen}
        />
    </Stack.Navigator>
  );
}

export default AppStackNavigator;