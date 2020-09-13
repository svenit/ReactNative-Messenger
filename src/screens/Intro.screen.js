import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import IntroStyle from '../styles/Intro.style';

const IntroScreen = () => {
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            style={IntroStyle.container}
        >
            <View style={IntroStyle.page}>
                <Text>CC</Text>
            </View>
            <View style={IntroStyle.page}>
                <Text>CC2</Text>
            </View>
        </ScrollView>
    )
}

export default IntroScreen;