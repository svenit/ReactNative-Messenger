import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatStackNavigator from './ChatStackNavigator';
import FriendsScreen from '../src/screens/Friends.screen';

const Tab = createBottomTabNavigator();

const AppBottomStackNavigator = () => {
    const defaultOptions = {

    }
    const tabScreens = [
        {
            name: 'Home',
            component: ChatStackNavigator,
            tabBarLabel: 'Chat',
            iconName: 'chat',
        },
        {
            name: 'Friend',
            component: FriendsScreen,
            tabBarLabel: 'Danh Bạ',
            iconName: 'friend',
        },
        {
            name: 'Setting',
            component: FriendsScreen,
            tabBarLabel: 'Cài Đặt',
            iconName: 'setting',
        },
    ];
    const renderComponent = () => {
        return tabScreens.map((screen, key) => (
            <Tab.Screen
                key={key}
                name={screen.name}
                component={screen.component}
                options={{
                    ...defaultOptions,
                    tabBarLabel: screen.tabBarLabel,
                    tabBarIcon: ({ color, size, focused }) => (
                        <BottomIcon
                            color={color}
                            focused={focused}
                            name={screen.iconName}
                            size={25}
                        />
                    ),
                }}
            />
        ));
    }
    return (
        <Tab.Navigator tabBarOptions={{
                showLabel: true,
                showIcon: true,
                activeTintColor: 'rgb(83, 146, 252)',
                keyboardHidesTabBar: true,
            }}>
            {renderComponent()}
        </Tab.Navigator>
    )
}

const BottomIcon = ({color, size, focused, name}) => {
    const iconMapping = {
        chat: {
            active: 'ios-chatbubble-sharp',
            inactive: 'chatbubble-outline'
        },
        friend: {
            active: 'person',
            inactive: 'person-outline'
        },
        setting: {
            active: 'settings-sharp',
            inactive: 'settings-outline'
        },
    }
    let { active, inactive } = iconMapping[name];
    return (
        <Icon
            color={color}
            name={focused ? active : inactive}
            size={20}
        />
    )
}

export default AppBottomStackNavigator;