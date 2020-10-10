import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, ScrollView, TouchableOpacity , Image } from 'react-native';
import { useSelector } from 'react-redux';
import RootStyle from '../styles/Root.style';
import FriendsStyle from '../styles/Friends.style';
import SearchBox from '../components/SearchBox';
import AvatarDot from '../components/AvatarDot';
import MessengerHelper from '../utils/Messenger';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatStyle from '../styles/Chat.style';

const themeColor =  'rgb(0, 153, 255)';

const Friends = ({navigation, showHeader = true}) => {
    const [friends, setFriends] = useState([]);
    const accounts = useSelector(state => state.account);
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        let friends = accounts.filter((account, key) => account.id != auth.id);
        setFriends(friends);
    }, []);
    showHeader ? navigation.setOptions({
        headerRight: () => <HeaderRight {...navigation} themeColor={themeColor} />,
        headerLeft: () => <HeaderLeft {...auth} />,
    }) : null;
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
            <FlatList
                data={friends}
                renderItem={renderFriends}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}


const HeaderLeft = ({avatar}) => {
    return (
        <SafeAreaView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
            <Image source={avatar} style={[RootStyle.smallAvatar, RootStyle.avatar, ChatStyle.headerUserAvatar]} />
            <Text style={ChatStyle.headerChatText}>Danh Bạ</Text>
        </SafeAreaView>
    )
}

const HeaderRight = ({navigate}) => {
    return (
        <SafeAreaView style={{flexDirection: 'row', marginBottom: 20, marginRight: 20}}>
            <View style={RootStyle.borderIcon}>
                <Icon name="person-add" size={23}/>
            </View>
            <TouchableOpacity style={RootStyle.borderIcon}>
                <Icon name="qr-code-outline" size={23}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Friends;