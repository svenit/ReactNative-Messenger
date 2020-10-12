import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RootStyle from '../styles/Root.style';

const screen = Dimensions.get('screen');

const SearchBox = (props) => {
    return (
        <View style={style.header}>
            <Icon style={style.headerIcon} name="search-outline" size={20} color="#ccc"/>
            <TextInput onChangeText={(e) => props.onChangeText(e)} style={[RootStyle.input, style.headerSearchBox]} placeholder="Tìm kiếm" />
        </View>
    )
}


const style = StyleSheet.create({
    header: {
        padding: 15,
        marginTop: 0,
        position: 'relative',
    },
    headerIcon: {
        position: 'absolute',
        top: 33,
        left: 33,
        zIndex: 2
    },
    headerSearchBox: {
        height: 45,
        width: screen.width - 40,
        paddingLeft: 40,
    },
});

export default SearchBox;