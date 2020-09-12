import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        width: screen.width,
        height: screen.height,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 200
    },
    logoContainer: {
        width: 120,
        height: 120,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        marginBottom: 20
    },
    logo: {
        width: 120,
        height: 120,
    },
    loginBtn: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});