import React from 'react';
import { View, Image, Text } from 'react-native';
import RootStyle from '../styles/Root.style';
import Icon from 'react-native-vector-icons/Ionicons';


const BackIcon = ({name, size, color = 'rgb(0, 153, 255)', marginTop = 0}) => {
    return (
        <View style={{marginTop}}>
            <Icon style={RootStyle.backIcon} name={name} size={size} color={color} />
        </View>
    )
}

export default BackIcon;