import React from 'react';
import { View, Image } from 'react-native';
import RootStyle from '../styles/Root.style';
import Icon from 'react-native-vector-icons/Ionicons';


const BackIcon = ({name, size, color}) => {
    return (
        <Icon style={RootStyle.backIcon} name={name} size={size} color={color} />
    )
}

export default BackIcon;