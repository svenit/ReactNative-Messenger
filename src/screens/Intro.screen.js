import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

import IntroStyle from '../styles/Intro.style';
import RootStyle from '../styles/Root.style';
import LoginStyle from '../styles/Login.style';

const IntroScreen = ({navigation}) => {
    const screen = Dimensions.get('screen');
    const [currentPage, setCurrentPage] = useState(0);
    const handleScroll = (event) => {
        let frame = event.nativeEvent.contentOffset.x;
        let currentPage = frame/screen.width;
        setCurrentPage(currentPage);
    }
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            style={IntroStyle.container}
            keyboardDismissMode='on-drag'
            onMomentumScrollEnd={handleScroll}
        >
            <PageScreen
                title="Chào mừng đến với Messenger"
                subTitle="Hãy bắt đầu khám phá thế giới"
                src={require('../assets/images/logo.png')}
            />
            <PageScreen
                title="Kết nối đến mọi người"
                subTitle="Dễ dàng kết nối & liên lạc đến mọi người"
                src={require('../assets/images/page-1.png')}
            />
            <PageScreen
                title="Chia sẻ khoảnh khắc"
                subTitle="Hãy ghi lại những khoảnh khắc tuyệt vời và chia sẻ đến mọi người"
                src={require('../assets/images/page-2.png')}
            />
            <PageScreen
                title="Bắt đầu khám phá"
                subTitle="Bắt đầu sử dụng Messenger"
                src={require('../assets/images/page-3.png')}
            >
                <TouchableOpacity
                    activeOpacity={.8}
                    style={[RootStyle.buttonPrimary, {marginTop: 20}]}
                    onPress={() => {navigation.navigate('Login')}}
                >
                    <Text style={LoginStyle.loginBtn}>Bắt Đầu</Text>
                </TouchableOpacity>
            </PageScreen>
        </ScrollView>
    )
}

const PageScreen = ({src, title, subTitle, children}) => {
    return (
        <View style={IntroStyle.page}>
            <Image
                source={src}
                style={IntroStyle.pageImage}
            />
            <Text style={IntroStyle.title}>{title}</Text>
            <Text style={[RootStyle.textMuted, RootStyle.textCenter]}>{subTitle}</Text>
            {children}
        </View>
    )
}

export default IntroScreen;