import React from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import LoginStyle from '../styles/Login.style';
import RootStyle from '../styles/Root.style';

const SignupScreen = ({navigation}) => {
    return (
        <View style={LoginStyle.background}>
            <StatusBar hidden={true} />
            <View style={LoginStyle.logoContainer}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={LoginStyle.logo}
                />
            </View>
            <View>
                <TextInput
                    style={RootStyle.input}
                    placeholder="Nhập tên tài khoản"
                />
                <TextInput
                    style={RootStyle.input}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={true}
                />
                <TextInput
                    style={RootStyle.input}
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={true}
                />
                <View style={[RootStyle.buttonPrimary, {marginTop: 20}]}>
                    <TouchableWithoutFeedback style={RootStyle.buttonPrimary}>
                        <Text style={LoginStyle.loginBtn}>Đăng Ký</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={{marginTop: 10}}>
                <Text style={RootStyle.textSm}>
                    Bạn đã có tài khoản?
                    <Text onPress={() => navigation.navigate('Login')} style={RootStyle.textPrimary}> Đăng nhập ngay</Text>
                </Text>
            </View>
        </View>
    )
}

export default SignupScreen;