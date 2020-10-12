import React from 'react';
import { SafeAreaView, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AvatarDot from './AvatarDot';
import { useSelector } from 'react-redux';
import MessengerHelper from '../utils/Messenger';

const Stories = ({navigation}) => {
    const auth = useSelector(state => state.auth);
    const accounts = useSelector(state => state.account.filter(user => user.id != auth.id).sort(() => Math.random() - 0.5));
    const renderStories = ({item}) => {
        return (
            <TouchableOpacity onPress={() => MessengerHelper.redirectToConversation(navigation, item)}>
                <AvatarDot status={item.isOnline ? 'active' : 'deactive'} image={item.avatar}/>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView>
            <FlatList
                style={{
                    marginHorizontal: 20,
                }}
                data={accounts}
                renderItem={renderStories}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default Stories;