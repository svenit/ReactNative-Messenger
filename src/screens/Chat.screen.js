import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ScrollView, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import FirebaseService from '../plugins/firebaseService';
import * as firebaseNodes from '../constants/firebaseNodes';
import RootStyle from '../styles/Root.style';
import SearchBox from '../components/SearchBox';

const ChatScreen = () => {
    const [conversations, setConversations] = useState([]);
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        FirebaseService.node(firebaseNodes.CONVERSATIONS).ref().on('value', snapshot => {
            setConversations([snapshot.val()]);
        });
        return () => {
            setConversations([]);
        }
    }, []);
    const renderConversations = ({item}) => {
        return Object.keys(item).map((conversation, key) => {
            return (
                <Text>{conversation}</Text>
            )
        });
    }
    return (
        <View style={RootStyle.container}>
            <SearchBox />
            <ScrollView>
                <FlatList
                    style={{
                        marginTop: 10,
                        backgroundColor: 'red'
                    }}
                    data={conversations}
                    renderItem={renderConversations}
                    keyExtractor={item => Math.random(0, 1000)}
                />
            </ScrollView>
        </View>
    )
}

export default ChatScreen;