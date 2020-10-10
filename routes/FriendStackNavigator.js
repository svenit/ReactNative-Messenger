import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FriendsScreen from '../src/screens/Friends.screen';

const Stack = createStackNavigator();

const FriendStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Friend">
        <Stack.Screen
          name="Friend"
          options={{
            headerShown: true,
            headerTitle: null
          }}
          component={FriendsScreen}
        />
    </Stack.Navigator>
  );
}

export default FriendStackNavigator;