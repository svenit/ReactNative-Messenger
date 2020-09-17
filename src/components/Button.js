import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import RootStyle from '../styles/Root.style';

const ButtonComponent = ({type, onPress, customeStyle, title}) => {
    const types = {
        primary: 'buttonPrimary'
    }
    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={[RootStyle[types[type]], customeStyle]}
            onPress={onPress}
        >
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default ButtonComponent;