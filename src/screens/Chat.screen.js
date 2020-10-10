import React, { useState, useEffect, useCallback } from 'react';
import { View, SafeAreaView, FlatList, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import FirebaseService from '../plugins/firebaseService';
import * as firebaseNodes from '../constants/firebaseNodes';
import RootStyle from '../styles/Root.style';
import SearchBox from '../components/SearchBox';
import MessengerHelper from '../utils/Messenger';
import FriendsStyle from '../styles/Friends.style';
import AvatarDot from '../components/AvatarDot';
import AuthHelper from '../utils/Auth';
import CommonHelper from '../utils/Common';
import Stories from '../components/Stories';
import ChatStyle from '../styles/Chat.style';
import Icon from 'react-native-vector-icons/Ionicons';

const themeColor =  'rgb(0, 153, 255)';

const ChatScreen = ({navigation}) => {
    const [conversations, setConversations] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        FirebaseService.node(`${firebaseNodes.USERS}/${auth.id}/conversations`).ref().on('value', snapshot => {
            let data = snapshot.val() ? Object.values(snapshot.val()) : [];
            data = data.sort((a, b) => b.updated_at - a.updated_at);
            setConversations(data);
        });
    }, [])
    navigation.setOptions({
        headerTitle: null,
        headerRight: () => <HeaderRight {...navigation} themeColor={themeColor} />,
        headerLeft: () => <HeaderLeft {...auth} navigation={navigation} />,
    });
    const redirectToConversation = (user) => {
        MessengerHelper.redirectToConversation(navigation, user);
    }
    const renderConversations = ({item}) => {
        let [sender, other] = item.users;
        let isSender = sender == auth.id;
        let userId = isSender ? other : sender;
        let user = { avatar, fullName, isOnline, hasStories } = AuthHelper.getUserById(userId);
        return (
            <TouchableOpacity onPress={() => redirectToConversation(user)} style={[FriendsStyle.listFriends, {justifyContent: 'space-between',}]}>
                <View style={{flexDirection: 'row',}}>
                    <AvatarDot hasStories={hasStories} image={avatar} status={isOnline ? 'active' : 'deactive'}/>
                    <View style={{flexDirection: 'column', justifyContent: 'space-evenly',}}>
                        <Text>{fullName}</Text>
                        <Text style={{fontSize: 12, color: '#888'}}>{isSender ? `Bạn: ${CommonHelper.shortWord(item.last_message)}` : CommonHelper.shortWord(item.last_message) } • {CommonHelper.getTimeFormat(item.created_at)}</Text>
                    </View>
                </View>
                {isSender ? <Icon style={{marginTop: 15,}} color="#ccc" name="ios-checkmark-circle-sharp" size={18} /> : <Text></Text>}
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={RootStyle.container}>
            <SearchBox />
            <View>
                <Stories navigation={navigation} />
                <FlatList
                    style={{
                        marginTop: 20,
                    }}
                    data={conversations}
                    renderItem={renderConversations}
                    keyExtractor={item => item.coversation_id}
                />
            </View>
        </SafeAreaView>
    )
}

const HeaderLeft = ({avatar, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
            <Image source={avatar} style={[RootStyle.smallAvatar, RootStyle.avatar, ChatStyle.headerUserAvatar]} />
            <Text style={ChatStyle.headerChatText}>Chat</Text>
        </TouchableOpacity>
    )
}

const HeaderRight = ({navigate}) => {
    return (
        <SafeAreaView style={{flexDirection: 'row', marginBottom: 20, marginRight: 20}}>
            <View style={RootStyle.borderIcon}>
                <Icon name="ios-camera" size={23}/>
            </View>
            <TouchableOpacity onPress={() => navigate('Search')} style={RootStyle.borderIcon}>
                <Icon name="ios-create" size={23}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ChatScreen;