import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../src/screens/Chat.screen';

const Stack = createStackNavigator();

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen
          name="Chat"
          options={{
            headerShown: true
          }}
          component={ChatScreen}
        />
    </Stack.Navigator>
  );
}

export default ChatStackNavigator;