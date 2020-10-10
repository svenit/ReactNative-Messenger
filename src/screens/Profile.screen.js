import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import BackIcon from '../components/BackIcon';
import { useSelector } from 'react-redux';

const ProfileScreen = ({navigation}) => {
    const auth = useSelector(state => state.auth);
    navigation.setOptions({
        headerTitle: auth.fullName,
        headerBackImage: () => <BackIcon marginTop={5} size={30} name="ios-arrow-back-outline"/>,
    });
    return (
        <SafeAreaView>
            <Text></Text>
        </SafeAreaView>
    )
}

export default ProfileScreen;