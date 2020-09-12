import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
    textMuted: {
        color: '#222'
    },
    textPrimary: {
        color: 'rgb(67, 119, 200)'
    },
    textSm: {
        fontSize: 12
    },
    input: {
        borderWidth: 1,
        borderColor: '#eee',
        width: 270,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#f2f2f2',
        padding: 10,
        margin: 6,
    },
    buttonPrimary: {
        backgroundColor: 'rgb(83, 146, 252)',
        padding: 10,
        margin: 6,
        width: 270,
        height: 50,
        color: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
    }
});