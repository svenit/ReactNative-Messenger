import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
    headerUserAvatar: {
        paddingLeft: 0,
        flexDirection: 'row',
        alignItems: 'center',
        width: screen.width - 150
    },
    avatarDot: {
        bottom: -4,
    },
    userFullName: {
        lineHeight: 30
    },
    userStatus: {
        fontSize: 11,
        color: '#888',
        marginTop: 3
    },
    headerIconGroup: {
        flex: 1,
        flexDirection: 'row',
    },
    headerIcon: {
        marginRight: 10,
    }
});