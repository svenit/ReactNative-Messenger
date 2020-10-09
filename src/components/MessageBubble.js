import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageBubble = ({body, isSender, themeColor}) => {
    const renderMessage = () => {
        if (isSender) {
            return (
                <View style={{alignItems: 'flex-end'}}>
                    <View style={[style.rightMessage, {backgroundColor: themeColor}]}>
                        <Text style={style.rightMessageText}>{body}</Text>
                    </View>
                </View>
            )
        }
        return (
            <View style={{alignItems: 'flex-start'}}>
                <View style={style.leftMessage}>
                    <Text>{body}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{flex: 1}}>
            {renderMessage()}
        </View>
    )
}

const style = StyleSheet.create({
    leftMessage: {
        backgroundColor: '#f1f0f0',
        width: 'auto',
        alignItems: 'flex-start',
        margin: 5,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        borderRadius: 25,
        marginLeft: 10,
    },
    rightMessage: {
        flexDirection: 'column',
        width: 'auto',
        alignItems: 'flex-start',
        margin: 5,
        marginRight: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        borderRadius: 25,
    },
    rightMessageText: {
        color: '#fff'
    }
});

export default MessageBubble;