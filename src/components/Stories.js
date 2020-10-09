import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AvatarDot from './AvatarDot';
import { useSelector } from 'react-redux';

const Stories = () => {
    const accounts = useSelector(state => state.account.sort(() => Math.random() - 0.5));
    const renderStories = ({item}) => {
        return (
            <View>
                <AvatarDot status="active" image={item.avatar}/>
            </View>
        )
    }
    return (
        <FlatList
            style={{
               marginHorizontal: 20,
               marginBottom: 10
            }}
            data={accounts}
            renderItem={renderStories}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default Stories;