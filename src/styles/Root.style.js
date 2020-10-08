import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    textMuted: {
        color: '#222'
    },
    textPrimary: {
        color: 'rgb(67, 119, 200)'
    },
    textSm: {
        fontSize: 12
    },
    textCenter: {
        textAlign: 'center',
        lineHeight: 25
    },
    input: {
        borderWidth: 1,
        borderColor: '#eee',
        width: 270,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f2f2f2',
        padding: 10,
        margin: 6,
    },
    buttonPrimary: {
        backgroundColor: 'rgb(83, 146, 252)',
        margin: 6,
        width: 270,
        height: 50,
        color: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
    },
    fullWidth: {
        width: screen.width
    },
    avatar: {
        marginRight: 10,
    },
    normalAvatar: {
        width: 46,
        height: 46,
        borderRadius: 25
    },
    avatarDot: {
        width: 10,
        height: 10,
        position: 'absolute',
        right: 10,
        bottom: 0,
        borderRadius: 25,
    },
    circleRadius: {
        borderRadius: 25
    },
    backIcon: {
        marginBottom: 10,
        marginLeft: 20
    },
    flexColumn: {
        flexDirection: 'column',
    }
});