import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

import IntroStyle from '../styles/Intro.style';
import RootStyle from '../styles/Root.style';
import LoginStyle from '../styles/Login.style';
import IndicatorDot from '../components/IndicatorDot';
import Icon from 'react-native-vector-icons/Feather';


const IntroScreen = ({navigation}) => {
    const introPages = [
        {
            title: 'Chào mừng đến với Messenger',
            subTitle: 'Hãy bắt đầu khám phá thế giới',
            image: require('../assets/images/logo.png'),
            children: null
        },
        {
            title: 'Kết nối đến mọi người',
            subTitle: 'Dễ dàng kết nối & liên lạc đến mọi người',
            image: require('../assets/images/page-1.png'),
            children: null
        },
        {
            title: 'Chia sẻ khoảnh khắc',
            subTitle: 'Hãy ghi lại những khoảnh khắc tuyệt vời và chia sẻ đến mọi người',
            image: require('../assets/images/page-2.png'),
            children: null
        },
        {
            title: 'Bắt đầu khám phá',
            subTitle: 'Khám phá & trải nghiệm Messenger ngay bây giờ',
            image: require('../assets/images/page-3.png'),
            children: <StartButtonComponent {...{navigation}}/>
        }


    ];

    const screen = Dimensions.get('screen');
    const [currentPage, setCurrentPage] = useState(0);
    const handleScroll = (event) => {
        let frame = event.nativeEvent.contentOffset.x;
        let currentPage = Math.round(frame/screen.width);
        setCurrentPage(currentPage);
    }
    const listIntroPages = () => {
        return introPages.map((item, index) => {
            return (
                <PageScreen
                    key={index}
                    title={item.title}
                    subTitle={item.subTitle}
                    src={item.image}
                >
                    {item.children}
                </PageScreen>
            )
        });
    }
    return (
        <View style={RootStyle.container}>
            <CloseIntro {...{navigation}} />
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                style={IntroStyle.container}
                keyboardDismissMode='on-drag'
                onScroll={handleScroll}
            >
                {listIntroPages()}
            </ScrollView>
            <IndicatorDot dots={introPages.length} currentDot={currentPage} />
        </View>
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

const StartButtonComponent = ({navigation}) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={[RootStyle.buttonPrimary, {marginTop: 20}]}
            onPress={() => {
                navigation.navigate('Login');
            }}
        >
            <Text style={LoginStyle.loginBtn}>Bắt Đầu</Text>
        </TouchableOpacity>
    )
}

const CloseIntro = ({navigation}) => {
    return (
        <TouchableOpacity
            style={IntroStyle.closeButton}
            onPress={() => {
                navigation.navigate('Login');
            }}
        >
            <Icon style={IntroStyle.closeButtonIcon} name="x" size={20} />
        </TouchableOpacity>
    )
}

export default IntroScreen;