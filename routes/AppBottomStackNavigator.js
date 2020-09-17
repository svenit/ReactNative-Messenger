import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import IconFeather from 'react-native-vector-icons/Feather';
import StackNavigator from './AppStackNavigator';

const Tab = createBottomTabNavigator();

const AppBottomStackNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    showLabel: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <IconFeather name="home" color="black" size={20} />
                    ),
                    tabBarBadge: 2,
                }}
            />
            <Tab.Screen
                name="StackNavigator"
                component={StackNavigator}
            />
        </Tab.Navigator>
    )
}

export default AppBottomStackNavigator;