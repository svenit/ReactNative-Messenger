import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Home = ({props}) => {
    const auth = useSelector(state => state.auth);
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Home;