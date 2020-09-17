import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import LoginStyle from '../styles/Login.style';
import RootStyle from '../styles/Root.style';
import { useSelector, useDispatch } from 'react-redux';
import Validator from '../utils/Validator';
import { actionSetAuth } from '../actions/authActions';
import ButtonComponet from '../components/Button';

const LoginScreen = ({navigation}) => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    const accounts = useSelector(state => state.account);
    const dispatch = useDispatch();
    const login = () => {
        let validator = Validator;
        validator.make({username, password}, [
            {
                attribute: 'username',
                text: 'Tên tài khoản',
                validate: 'required'
            },
            {
                attribute: 'password',
                text: 'Mật khẩu',
                validate: 'required'
            }
        ]);
        if (validator.fails()) {
            return Alert.alert('Thông báo', validator.first().message);
        }
        let checkAccount = accounts.filter(account => account.username == username && account.password == password);
        if (checkAccount.length > 0) {
            dispatch(actionSetAuth(checkAccount[0]));
            navigation.navigate('Home');
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
                        setUsername(text);
                    }}
                />
                <TextInput
                    style={RootStyle.input}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                />
                <ButtonComponet
                    customeStyle={{marginTop: 20}}
                    type="primary"
                    onPress={() => login()}
                    title="Đăng Nhập"
                />
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
