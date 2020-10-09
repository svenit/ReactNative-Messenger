import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import RootStyle from '../styles/Root.style';
import FriendsStyle from '../styles/Friends.style';
import SearchBox from '../components/SearchBox';
import AvatarDot from '../components/AvatarDot';
import MessengerHelper from '../utils/Messenger';

const Friends = ({navigation}) => {
    const [friends, setFriends] = useState([]);
    const accounts = useSelector(state => state.account);
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        let friends = accounts.filter((account, key) => account.id != auth.id);
        setFriends(friends);
    }, []);
    const redirectToConversation = (user) => {
        MessengerHelper.redirectToConversation(navigation, user);
    }
    const renderFriends = ({item}) => {
        return (
            <TouchableOpacity onPress={() => redirectToConversation(item)} style={FriendsStyle.listFriends}>
                <AvatarDot image={item.avatar} status="active"/>
                <Text style={FriendsStyle.listFriendsName}>{item.fullName}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={RootStyle.container}>
            <SearchBox />
            <ScrollView>
                <FlatList
                    data={friends}
                    renderItem={renderFriends}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Friends;