import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatStackNavigator from './ChatStackNavigator';
import FriendsStackNavigator from './FriendStackNavigator';

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
            component: FriendsStackNavigator,
            tabBarLabel: 'Danh Bạ',
            iconName: 'friend',
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
                            size={23}
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
                activeTintColor: '#000',
                inactiveTintColor: '#ccc',
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
            inactive: 'ios-chatbubble-sharp'
        },
        friend: {
            active: 'ios-person',
            inactive: 'ios-person'
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
            size={size}
        />
    )
}

export default AppBottomStackNavigator;