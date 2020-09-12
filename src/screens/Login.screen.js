import React, { useState, useEffect } from 'react';
import { Alert, View, Text, StatusBar, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import LoginStyle from '../styles/Login.style';
import RootStyle from '../styles/Root.style';
import accounts from '../data/accounts';

const LoginScreen = ({navigation}) => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const login = () => {
        let checkAccount = accounts.filter(account => account.username == email && account.password == password);
        if (checkAccount.length > 0) {
            return;
        }
        Alert.alert('Thông báo', 'Tài khoản hoặc mật khẩu không chính xác');
    }
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
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                    onSubmitEditing={() => login()}
                />
                <TextInput
                    style={RootStyle.input}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                    onSubmitEditing={() => login()}
                />
                <View style={[RootStyle.buttonPrimary, {marginTop: 20}]}>
                    <TouchableWithoutFeedback style={RootStyle.buttonPrimary} onPress={() => {login()}}>
                        <Text style={LoginStyle.loginBtn}>Đăng Nhập</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={{marginTop: 10}}>
                <Text style={RootStyle.textSm}>
                    Bạn chưa có tài khoản?
                    <Text onPress={() => navigation.navigate('Signup')} style={RootStyle.textPrimary}> Đăng ký ngay</Text>
                </Text>
            </View>
        </View>
    )
}

export default LoginScreen;