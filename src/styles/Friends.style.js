import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
    listFriends: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
        flexDirection: 'row',
    },
    listFriendsName: {
        lineHeight: 46
    }
});