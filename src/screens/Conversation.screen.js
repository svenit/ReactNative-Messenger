import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import AvatarDot from '../components/AvatarDot';
import ConversationStyle from '../styles/Conversation.style';
import RootStyle from '../styles/Root.style';
import BackIcon from '../components/BackIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import MessengerHelper from '../utils/Messenger';
import FirebaseService from '../plugins/firebaseService';
import * as firebaseNodes from '../constants/firebaseNodes';
import MessageBubble from '../components/MessageBubble';
import Validator from '../utils/Validator';

const Conversation = ({route, navigation}) => {
    const user = { id, fullName, avatar, isOnline} = route.params;
    const auth = useSelector(state => state.auth);
    const [conversation, setConversation] = useState({});
    const [messages, setMessages] = useState([]);
    const [showSendButton, setShowSendButton] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [loading, setLoading] = useState(true);
    const [singleton, setSingleton] = useState(false);
    const messageInput = useRef(null);
    const flatList = useRef(null);
    const themeColor = conversation ? conversation.theme_color : 'rgb(0, 132, 255)';
    navigation.setOptions({
        headerTitle: <HeaderTitle {...user} />,
        headerRight: () => <HeaderRight conversation={conversation} user={user} navigation={navigation} themeColor={themeColor} />,
        headerBackImage: () => <BackIcon size={30} color={themeColor} name="ios-arrow-back-outline"/>,
        headerTitleStyle: {
            padding: 10,
        },
    });
    useEffect(() => {
        MessengerHelper.createUserChatBetween(auth.id, user.id);
        FirebaseService.node(`${firebaseNodes.USERS}/${auth.id}/conversations/${user.id}`).ref().on('value', snapshot => {
            setConversation(snapshot.val());
        });
        return () => {
            setLoading(true);
        }
    }, []);
    useEffect(() => {
        let conversationId =  conversation ? conversation.coversation_id : '';
        if (conversationId && !singleton) {
            setSingleton(true);
            fetchMessage(conversationId);
        }
    }, [conversation])
    fetchMessage = (conversationId) => {
        FirebaseService.node(`${firebaseNodes.CONVERSATIONS}/${conversationId}`).ref().on('value', async (snapshot) => {
            let messages = snapshot.val() ? Object.values(snapshot.val()) : [];
            setMessages(messages);
            setLoading(false);
        });
    },
    renderSendButton = () => {
        if (showSendButton) {
            return (
                <TouchableOpacity onPress={() => sendMessage()} style={{padding: 10}}>
                    <Icon name="ios-send" color={themeColor} size={25}/>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity style={{padding: 10}}>
                <Icon name="ios-thumbs-up-sharp" color={themeColor} size={25}/>
            </TouchableOpacity>
        )
    }
    renderMessage = ({item}) => {
        item = {
            themeColor,
            isSender: item.sender_id == auth.id,
            ...item
        };
        if (auth.id != item.deleted_by) {
            return <MessageBubble {...item} />
        }
    }
    sendMessage = () => {
        let validator = Validator;
        validator.make({messageText}, [
            {
                attribute: 'messageText',
                text: 'Tin nhắn',
                validate: 'required'
            },
        ]);
        if (validator.fails()) {
            return;
        }
        let time = new Date().getTime();
        FirebaseService.node(`${firebaseNodes.CONVERSATIONS}/${conversation.coversation_id}`).ref().push({
            sender_id: auth.id,
            receiver_id: user.id,
            body: messageText,
            is_show: true,
            type: 'text',
            created_at: time
        });
        MessengerHelper.updateUserConversation(auth.id, user.id, {
            last_message: messageText,
            is_show: true,
        });
        messageInput.current.clear();
        messageInput.current.focus();
    }
    renderConversationMessages = () => {
        if (loading) {
            return <ActivityIndicator size="large" style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
        }
        return (
            <View style={{flex: 9.3, paddingTop: 10, paddingBottom: 10}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ref={flatList}
                    onContentSizeChange={()=> flatList.current.scrollToEnd()}
                    data={messages}
                    renderItem={renderMessage}
                    keyExtractor={item => item.created_at}
                />
            </View>
        )
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
            <SafeAreaView style={RootStyle.container}>
                <View style={{flex: 1}}>
                    <View style={{flex: 9.3}}>
                        {renderConversationMessages()}
                    </View>
                    <View style={{flex: .7,padding: 10, borderTopWidth: 1, borderColor: '#f7f7f7', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',}}>
                        <View style={{flexDirection: 'row', flex: .5, padding: 5, justifyContent: 'space-between',}}>
                            <Icon color={themeColor} name="ios-add-circle" size={25}/>
                            <Icon color={themeColor} name="ios-navigate-circle" size={25}/>
                            <Icon color={themeColor} name="mic-sharp" size={25}/>
                            <Icon color={themeColor} name="ios-image" size={25}/>
                        </View>
                        <View style={{flex: .8, position: 'relative'}}>
                            <TextInput ref={messageInput} onSubmitEditing={() => sendMessage()} onChangeText={(text) => setMessageText(text)} onFocus={() => setShowSendButton(true)} onBlur={() => setShowSendButton(false)} placeholder="Nhập tin nhắn..." style={ConversationStyle.chatInput} />
                            <Icon style={{position: 'absolute', right: 10, top: '15%'}} name="ios-happy" color={themeColor} size={25}/>
                        </View>
                        {renderSendButton()}
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const HeaderTitle = ({avatar, fullName, isOnline}) => {
    return (
        <SafeAreaView style={ConversationStyle.headerUserAvatar}>
            <AvatarDot dotOptions={ConversationStyle.avatarDot} image={avatar} size="small" status={isOnline ? 'active' : 'deactive'}/>
            <View style={RootStyle.flexColumn}>
                <Text style={ConversationStyle.userFullName}>{fullName}</Text>
                <Text style={ConversationStyle.userStatus}>{isOnline ? 'Đang hoạt động' : 'Offline'}</Text>
            </View>
        </SafeAreaView>
    )
}

const HeaderRight = ({themeColor, navigation, user, conversation}) => {
    return (
        <SafeAreaView style={ConversationStyle.headerIconGroup}>
            <Icon style={ConversationStyle.headerIcon} name="ios-videocam" size={28} color={themeColor}/>
            <TouchableOpacity onPress={() => navigation.navigate('ConversationInfor', {user, conversation})}>
                <Icon style={ConversationStyle.headerIcon} name="information-circle-sharp" size={28} color={themeColor}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Conversation;