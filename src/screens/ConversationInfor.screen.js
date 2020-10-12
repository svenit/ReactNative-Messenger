import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Modal, ScrollView, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import BackIcon from '../components/BackIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import RootStyle from '../styles/Root.style';
import FirebaseService from '../plugins/firebaseService';
import MessengerHelper from '../utils/Messenger';
import { useSelector } from 'react-redux';

const screen = Dimensions.get('screen');

const ConversationInfor = ({navigation, route}) => {
    const { user, conversation } = route.params;
    const [modalChangeThemeVisible, setModalChangeThemeVisible] = useState(false);
    const auth = useSelector(state => state.auth);
    navigation.setOptions({
        headerStyle: {
            backgroundColor: modalChangeThemeVisible ? 'rgba(0, 0, 0, .18)' : '#fff',
        },
        headerTitle: null,
        headerBackImage: () => <BackIcon color="#000" marginTop={5} size={30} name="ios-arrow-back-outline"/>,
        headerRight: () => <Icon style={{marginRight: 20}} name="ios-ellipsis-vertical" size={20} />
    });
    const listSections = [
        {
            title: '',
            items: [
                {
                    title: <Text style={RootStyle.fontNormalBold}>Chủ đề</Text>,
                    iconName: 'ios-color-palette',
                    rightComponent: <TouchableOpacity onPress={() => setModalChangeThemeVisible(true)} style={[RootStyle.borderIcon, {width: 25, height: 25, backgroundColor: conversation.theme_color}]}>
                        <Icon color="#fff" name="ios-contrast" size={20} />
                    </TouchableOpacity>
                },
                {
                    title: <Text style={RootStyle.fontNormalBold}>Biểu tượng cảm xúc</Text>,
                    iconName: 'ios-heart',
                    rightComponent: <Icon color={conversation.theme_color} style={{marginRight: 5,}} name="ios-thumbs-up-sharp" size={23} />
                },
                {
                    title: <Text style={RootStyle.fontNormalBold}>Biệt danh</Text>,
                    iconName: 'ios-star',
                    rightComponent: null
                },
            ]
        },
        {
            title: 'Hành động khác',
            items: [
                {
                    title: <Text style={RootStyle.fontNormalBold}>Xem ảnh & video</Text>,
                    iconName: 'ios-image',
                    rightComponent: null
                },
                {
                    title: <Text style={RootStyle.fontNormalBold}>Tìm kiếm trong cuộc trò chuyện</Text>,
                    iconName: 'ios-search',
                    rightComponent: null
                },
                {
                    title: <Text style={RootStyle.fontNormalBold}>Đi đến cuộc trò chuyện bí mật</Text>,
                    iconName: 'ios-chatbubble',
                    rightComponent: null
                },
                {
                    title: <TouchableOpacity onPress={() => deleteConversation()}><Text style={RootStyle.fontNormalBold}>Xóa cuộc trò chuyện</Text></TouchableOpacity>,
                    iconName: 'ios-trash',
                    rightComponent: null
                },
            ]
        },
    ];
    const renderList = () => {
        return listSections.map((section, key) => {
            return (
                <View key={key}>
                    <Text style={{marginVertical: 10, color: '#777'}}>{section.title}</Text>
                    {
                        section.items.map((item, i) => {
                            return (
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View style={[RootStyle.borderIcon, {width: 30, height: 30,}]}>
                                            <Icon color="#000" name={item.iconName} size={20} />
                                        </View>
                                        {item.title}
                                    </View>
                                    <View>
                                        {item.rightComponent}
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            )
        })
    }
    const listColors = ['rgb(0, 132, 255)', 'rgb(68, 190, 199)', 'rgb(255, 195, 0)', 'rgb(250, 60, 76)', 'rgb(214, 150, 187)', 'rgb(19, 207, 19)', 'rgb(255, 126, 41)', 'rgb(118, 70, 255)', 'rgb(32, 206, 245)', 'rgb(255, 92, 161)'];
    const renderListColors = () => {
        return listColors.map((color, key) => {
            return (
                <TouchableOpacity onPress={() => changeConversationThemeColor(color)} style={{backgroundColor: color, width: screen.width/7, height: screen.width/7,borderRadius: 50, marginTop: 15,}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                        {conversation.theme_color == color ? <Icon name="ios-checkmark" size={25} color="#fff" /> : null}
                    </View>
                </TouchableOpacity>
            )
        });
    }
    const changeConversationThemeColor = (color) => {
        MessengerHelper.updateUserConversation(auth.id, user.id, {
            theme_color: color
        });
        navigation.navigate('Conversation', {
            user
        });
    }
    const deleteConversation = () => {
        Alert.alert(
            "Xóa cuộc trò chuyện này?",
            "",
            [
              {
                text: "Xóa",
                onPress: () => {
                    navigation.navigate('Chat');
                    MessengerHelper.deleteConversation(conversation.coversation_id, auth.id, user.id);
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
        <SafeAreaView style={[RootStyle.container]}>
            {modalChangeThemeVisible ? <View style={{flex: 1, position: 'absolute', width: 1000, height: 1000, backgroundColor: 'rgba(0, 0, 0, .2)', zIndex: 3}}></View> : null}
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalChangeThemeVisible}
                >
                    <View style={[RootStyle.bottomView]}>
                        <View style={RootStyle.modalView}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                                <Text style={{fontWeight: 'bold'}}>Tùy chỉnh đoạn chat</Text>
                                <TouchableOpacity onPress={() => setModalChangeThemeVisible(false)} style={[RootStyle.borderIcon, {width: 22, height: 22}]}>
                                    <Icon name="ios-close" size={18} />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                                {renderListColors()}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={{alignItems: 'center', marginVertical: 20}}>
                <Image source={user.avatar} style={RootStyle.largeAvatar} />
                <Text style={{fontSize: 20, fontWeight: '600', marginTop: 15}}>{user.fullName}</Text>
                <View style={{flex: 1, marginVertical: 30, flexDirection: 'row'}}>
                    <View style={[RootStyle.borderIcon, {marginHorizontal: 10,}]}>
                        <Icon name="ios-call" size={20}/>
                    </View>
                    <View style={[RootStyle.borderIcon, {marginHorizontal: 10,}]}>
                        <Icon name="ios-videocam" size={20}/>
                    </View>
                    <View style={[RootStyle.borderIcon, {marginHorizontal: 10,}]}>
                        <Icon name="ios-person" size={20}/>
                    </View>
                    <View style={[RootStyle.borderIcon, {marginHorizontal: 10,}]}>
                        <Icon name="ios-notifications" size={20}/>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, marginHorizontal: 20,}}>
                {renderList()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ConversationInfor;