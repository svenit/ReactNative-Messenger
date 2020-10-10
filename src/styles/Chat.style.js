import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
    headerUserAvatar: {
        marginLeft: 20,
    },
    headerChatText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});