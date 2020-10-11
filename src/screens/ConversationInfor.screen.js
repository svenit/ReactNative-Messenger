import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import BackIcon from '../components/BackIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import RootStyle from '../styles/Root.style';

const ConversationInfor = ({navigation, route}) => {
    let { user, conversation } = route.params;
    navigation.setOptions({
        headerTitle: null,
        headerBackImage: () => <BackIcon color="#000" marginTop={5} size={30} name="ios-arrow-back-outline"/>,
        headerRight: () => <Icon style={{marginRight: 20}} name="ios-ellipsis-vertical" size={20} />
    });
    return (
        <SafeAreaView style={RootStyle.container}>
            <View style={{alignItems: 'center', marginVertical: 20}}>
                <Image source={user.avatar} style={RootStyle.largeAvatar} />
                <Text style={{fontSize: 20, fontWeight: '600', marginTop: 15}}>{user.fullName}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, marginHorizontal: 20,}}>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ConversationInfor;