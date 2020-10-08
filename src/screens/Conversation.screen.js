import React from 'react';
import { View, Text, Image } from 'react-native';
import AvatarDot from '../components/AvatarDot';
import ConversationStyle from '../styles/Conversation.style';
import RootStyle from '../styles/Root.style';
import BackIcon from '../components/BackIcon';
import Icon from 'react-native-vector-icons/Ionicons';

const Conversation = ({route, navigation}) => {
    const themeColor = 'rgb(0, 153, 255)';
    const { id, fullName, avatar, isOnline } = route.params;
    navigation.setOptions({
        title: fullName,
        headerTitle: (
            <View style={ConversationStyle.headerUserAvatar}>
                <AvatarDot dotOptions={ConversationStyle.avatarDot} image={avatar} size="small" status="active"/>
                <View style={RootStyle.flexColumn}>
                    <Text style={ConversationStyle.userFullName}>{fullName}</Text>
                    <Text style={ConversationStyle.userStatus}>{isOnline ? 'Đang hoạt động' : 'Offline'}</Text>
                </View>
            </View>
        ),
        headerTitleStyle: {
            padding: 10
        },
        headerRight: () => {
            return (
                <View style={ConversationStyle.headerIconGroup}>
                    <Icon style={ConversationStyle.headerIcon} name="ios-videocam" size={28} color={themeColor}/>
                    <Icon style={ConversationStyle.headerIcon} name="information-circle-sharp" size={28} color={themeColor}/>
                </View>
            )
        },
        headerBackImage: () => {
            return (
                <BackIcon size={30} color={themeColor} name="ios-arrow-back-outline"/>
            )
        }
    });
    return (
        <View>
            <Text>1</Text>
        </View>
    )
}

export default Conversation;