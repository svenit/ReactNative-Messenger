import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text, TouchableOpacity, Image, ActivityIndicator, Modal, Alert } from 'react-native';
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

const themeColor =  'rgb(0, 132, 255)';

const ChatScreen = ({navigation}) => {
    const [conversations, setConversations] = useState([]);
    const [cloneConversations, setCloneConversations] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [modalConversationOption, setModalConversationOption] = useState(false);
    const [currentConversation, setCurrentConversation] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = useSelector(state => state.auth);
    const accounts = useSelector(state => state.account);
    useEffect(() => {
        FirebaseService.node(`${firebaseNodes.USERS}/${auth.id}/conversations`).ref().on('value', snapshot => {
            let data = snapshot.val() ? Object.values(snapshot.val()) : [];
            data = data.sort((a, b) => b.updated_at - a.updated_at).filter((a) => a.is_show);
            setLoading(false);
            setCloneConversations(data);
            setConversations(data);
        });
    }, [])
    navigation.setOptions({
        headerTitle: null,
        headerStyle: {
            backgroundColor: modalConversationOption ? 'rgba(0, 0, 0, .18)' : '#fff',
        },
        headerRight: () => <HeaderRight {...navigation} themeColor={themeColor} />,
        headerLeft: () => <HeaderLeft {...auth} navigation={navigation} />,
    });
    const redirectToConversation = (user) => {
        MessengerHelper.redirectToConversation(navigation, user);
    }
    const searchConversation = (text) => {
        if (text) {
            let searchAccounts = accounts.filter((account, key) => account.fullName.toLowerCase().indexOf(text.toLowerCase()) != -1).map(acc => acc.id);
            let searchConversations = conversations.filter(conversation => {
                let [senderId, receiverId] = conversation.users;
                return searchAccounts.includes(auth.id == senderId ? receiverId : senderId);
            });
            setIsSearching(true);
            return setConversations(searchConversations);
        }
        setIsSearching(false);
        setConversations(cloneConversations);
    }
    const renderConversations = ({item}) => {
        let [sender, other] = item.users;
        let isSender = sender == auth.id;
        let userId = isSender ? other : sender;
        let user = { avatar, fullName, isOnline, hasStories } = AuthHelper.getUserById(userId);
        item.userId = userId;
        return (
            <TouchableOpacity onLongPress={() => openConversationModal(item)} onPress={() => redirectToConversation(user)} style={[FriendsStyle.listFriends, {justifyContent: 'space-between',}]}>
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
    const openConversationModal = (conversation) => {
        setModalConversationOption(true);
        setCurrentConversation(conversation);
    }
    const deleteConversation = () => {
        Alert.alert(
            "Xóa cuộc trò chuyện này?",
            "",
            [
              {
                text: "Xóa",
                onPress: () => {
                    MessengerHelper.deleteConversation(currentConversation.coversation_id, auth.id, currentConversation.userId);
                    setModalConversationOption(false);
                }
              },
              {
                text: "Hủy",
                style: "cancel"
              },
            ],
            { cancelable: true }
        );
    }
    return (
        <SafeAreaView style={RootStyle.container}>
            {modalConversationOption ? <View style={{zIndex: 99, flex: 1, position: 'absolute', width: 1000, height: 1000, backgroundColor: 'rgba(0, 0, 0, .2)', zIndex: 3}}></View> : null}
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalConversationOption}
                >
                    <View style={[RootStyle.bottomView]}>
                        <View style={[RootStyle.modalView, {margin: 0,}]}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                                <Text style={{fontWeight: 'bold'}}>Tùy chỉnh cuộc hội thoại</Text>
                                <TouchableOpacity onPress={() => setModalConversationOption(false)} style={[RootStyle.borderIcon, {width: 22, height: 22}]}>
                                    <Icon name="ios-close" size={18} />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop: 20}}>
                                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15,}}>
                                    <View style={RootStyle.borderIcon}>
                                        <Icon name="ios-notifications-off" size={15}/>
                                    </View>
                                    <Text>Tắt thông báo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteConversation()} style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15,}}>
                                    <View style={RootStyle.borderIcon}>
                                        <Icon name="ios-trash" size={15}/>
                                    </View>
                                    <Text>Xóa cuộc trò chuyện</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15,}}>
                                    <View style={RootStyle.borderIcon}>
                                        <Icon name="ios-close" size={15}/>
                                    </View>
                                    <Text>Chặn</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <SearchBox onChangeText={(text) => searchConversation(text)} />
            <View style={{flex: 1}}>
                {!isSearching ? <Stories navigation={navigation} /> : null}
                {loading ? <ActivityIndicator size="large" style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} /> : (conversations.length > 0 ? <FlatList
                    style={{
                        marginTop: 20,
                    }}
                    showsVerticalScrollIndicator={false}
                    data={conversations}
                    renderItem={renderConversations}
                    keyExtractor={item => item.coversation_id}
                /> : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{color: '#a1a1a1'}}>Không tìm thấy hộp thoại nào :(</Text>
                    </View>)}
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