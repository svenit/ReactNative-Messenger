import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Login.screen';
import SignupScreen from './src/screens/Signup.screen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="Signup" options={{headerShown: false}} component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;