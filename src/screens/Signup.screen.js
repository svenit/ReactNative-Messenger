import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import LoginStyle from '../styles/Login.style';
import RootStyle from '../styles/Root.style';
import { useSelector, useDispatch } from 'react-redux';
import Validator from '../utils/Validator';
import { actionSignup } from '../actions/authActions';

const SignupScreen = ({navigation}) => {
    let [username, setUsername] = useState('');
    let [fullName, setFullName] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    const accounts = useSelector(state => state.account);
    const dispatch = useDispatch();
    const signup = () => {
        let validator = Validator;
        validator.make({username, fullName, password, confirmPassword}, [
            {
                attribute: 'username',
                text: 'Tên tài khoản',
                validate: 'required'
            },
            {
                attribute: 'fullName',
                text: 'Tên tài khoản',
                validate: 'required'
            },
            {
                attribute: 'password',
                text: 'Mật khẩu',
                validate: 'required'
            },
            {
                attribute: 'confirmPassword',
                text: 'Mật khẩu xác nhận',
                validate: 'required|same:password'
            },
        ]);
        let checkUsername = accounts.filter(account => username == account.username);
        if (checkUsername.length > 0) {
            validator.addErrors({
                message: 'Tài khoản đã tồn tại'
            });
        }
        if (validator.fails()) {
            return Alert.alert('Thông báo', validator.first().message);
        }
        let user = {
            id: accounts[accounts.length - 1].id + 1,
            username,
            password,
            fullName,
            avatar: null,
            isOnline: true,
            friends: []
        };
        dispatch(actionSignup(user));
        Alert.alert('Thông báo', 'Đăng ký tài khoản thành công', [
            {
                text: 'Đăng nhập ngay',
                onPress: () => {
                    navigation.navigate('Login');
                }
            },
            {
                text: 'Hủy'
            }
        ]);
    }
    return (
        <View style={[LoginStyle.background, {paddingTop: 150}]}>
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
                    onSubmitEditing={() => signup()}
                />
                <TextInput
                    style={RootStyle.input}
                    placeholder="Nhập họ & tên"
                    onChangeText={(text) => {
                        setFullName(text);
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
                    onSubmitEditing={() => signup()}
                />
                <TextInput
                    style={RootStyle.input}
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setConfirmPassword(text);
                    }}
                    onSubmitEditing={() => signup()}
                />
                <TouchableOpacity
                    activeOpacity={.8}
                    style={[RootStyle.buttonPrimary, {marginTop: 20}]}
                    onPress={() => {signup()}}
                >
                    <Text style={LoginStyle.loginBtn}>Đăng Ký</Text>
                </TouchableOpacity>
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