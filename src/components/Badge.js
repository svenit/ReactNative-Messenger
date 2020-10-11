import React from 'react';
import { View, Text } from 'react-native';

const Badge = ({backgroundColor, color, text, style, size}) => {
    return (
        <View style={{...style, backgroundColor, borderRadius: 50, width: size, height: size, alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{color}}>{text}</Text>
        </View>
    )
}

export default Badge;