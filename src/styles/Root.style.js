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
        width: 52,
        height: 52,
        borderRadius: 52
    },
    smallAvatar: {
        width: 36,
        height: 36,
        borderRadius: 25
    },
    largeAvatar: {
        width: 82,
        height: 82,
        borderRadius: 62
    },
    avatarDot: {
        width: 10,
        height: 10,
        position: 'absolute',
        right: 15,
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
    },
    borderIcon: {
        backgroundColor: '#f2f2f2',
        borderRadius: 25,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    fontNormalBold: {
        fontWeight: '500'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 25,
        padding: 20,
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        flex: 1,
        justifyContent: 'flex-end',
    }
});