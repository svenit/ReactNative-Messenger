import React, { useState, useEffect, useCallback } from 'react';
import { View, SafeAreaView, FlatList, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import FirebaseService from '../plugins/firebaseService';
import * as firebaseNodes from '../constants/firebaseNodes';
import RootStyle from '../styles/Root.style';
import SearchBox from '../components/SearchBox';
import MessengerHelper from '../utils/Messenger';
import FriendsStyle from '../styles/Friends.style';
import AvatarDot from '../components/AvatarDot';
import AuthHelper from '../utils/Auth';
import Stories from '../components/Stories';

const ChatScreen = ({navigation}) => {
    const [conversations, setConversations] = useState([]);
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        FirebaseService.node(`${firebaseNodes.USERS}/${auth.id}/conversations`).ref().on('value', snapshot => {
            let data = snapshot.val() ? Object.values(snapshot.val()) : [];
            data = data.sort((a, b) => b.updated_at - a.updated_at);
            setConversations(data);
        });
    }, [])
    const redirectToConversation = (user) => {
        MessengerHelper.redirectToConversation(navigation, user);
    }
    const renderConversations = ({item}) => {
        let [sender, other] = item.users;
        let isSender = sender == auth.id;
        let userId = isSender ? other : sender;
        let user = { avatar, fullName, isOnline } = AuthHelper.getUserById(userId);
        return (
            <TouchableOpacity onPress={() => redirectToConversation(user)} style={FriendsStyle.listFriends}>
                <AvatarDot image={avatar} status="active"/>
                <View style={{flexDirection: 'column', justifyContent: 'space-evenly',}}>
                    <Text>{fullName}</Text>
                    <Text style={{fontSize: 12, color: '#888'}}>{isSender ? `Bạn: ${item.last_message}` : item.last_message }</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={RootStyle.container}>
            <SearchBox />
            <ScrollView>
                <Stories />
                <FlatList
                    style={{
                        marginTop: 10,
                    }}
                    data={conversations}
                    renderItem={renderConversations}
                    keyExtractor={item => item.coversation_id}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChatScreen;