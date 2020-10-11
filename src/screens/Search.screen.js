import React from 'react';
import { SafeAreaView } from 'react-native';
import FriendsScreen from './Friends.screen';
import BackIcon from '../components/BackIcon';

const SearchScreen = ({navigation}) => {
    navigation.setOptions({
        headerTitle: 'Tin nhắn mới',
        headerBackImage: () => <BackIcon color="#000" marginTop={5} size={30} name="ios-arrow-back-outline"/>,
    });
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <FriendsScreen showHeader={false} navigation={navigation}/>
        </SafeAreaView>
    )
}

export default SearchScreen;