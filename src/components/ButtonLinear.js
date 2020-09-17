import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import RootStyle from '../styles/Root.style';
import LinearGradient from 'react-native-linear-gradient';

const ButtonLinearComponet = ({type, onPress, customeStyle, title}) => {
    const types = {
        primary: {
            name: 'buttonPrimary',
            colors: ['rgb(114, 169, 252)', 'rgb(74, 131, 252)']
        }
    }
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}>
            <LinearGradient
                style={[RootStyle[types[type].name], customeStyle]}
                colors={types[type].colors}>
                <Text style={style.buttonText}>{title}</Text>
            </LinearGradient>
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

export default ButtonLinearComponet;