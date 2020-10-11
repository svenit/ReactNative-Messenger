import React, {useState} from 'react';
import { SafeAreaView, Text, View, Image, Switch, ScrollView } from 'react-native';
import BackIcon from '../components/BackIcon';
import { useSelector } from 'react-redux';
import RootStyle from '../styles/Root.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Badge from '../components/Badge';

const ProfileScreen = ({navigation}) => {
    const auth = useSelector(state => state.auth);
    navigation.setOptions({
        headerTitle: 'Cá nhân',
        headerBackImage: () => <BackIcon color="#000" marginTop={5} size={30} name="ios-arrow-back-outline"/>,
    });
    const [darkMode, setDarkMode] = useState(false);
    const [active, setActive] = useState(true);
    const listSections = [
        {
            title: '',
            items: [
                {
                    title: 'Dark Mode',
                    iconName: 'ios-moon',
                    iconBackground: '#000',
                    iconColor: '#fff',
                    rightComponent: <Switch
                        trackColor={{ false: "#ccc", true: "#000" }}
                        thumbColor={darkMode ? "#fff" : "#fff"}
                        style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                        ios_backgroundColor="#ccc"
                        onValueChange={() => setDarkMode(previousState => !previousState)}
                        value={darkMode}
                    />
                },
                {
                    title: 'Tin nhắn chờ',
                    iconName: 'ios-chatbubble-ellipses',
                    iconBackground: 'rgb(0, 153, 255)',
                    iconColor: '#fff',
                    rightComponent: <Badge size={20} style={{marginTop: 5, marginRight: 10}} backgroundColor="red" color="#fff" text="8" />
                },
            ]
        },
        {
            title: 'Cá nhân',
            items: [
                {
                    title: 'Trạng thái hoạt động',
                    iconName: 'ios-flash',
                    iconBackground: 'rgb(108, 235, 125)',
                    iconColor: '#fff',
                    rightComponent: <Switch
                        trackColor={{ false: "#ccc", true: "#000" }}
                        thumbColor={active ? "#fff" : "#fff"}
                        style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                        ios_backgroundColor="#ccc"
                        onValueChange={() => setActive(previousState => !previousState)}
                        value={active}
                    />
                },
                {
                    title: 'Tên người dùng',
                    iconName: 'ios-at-sharp',
                    iconBackground: '#fa4848',
                    iconColor: '#fff',
                    rightComponent: <Text style={{color: '#888', marginRight: 10,}}>@{auth.username}</Text>
                },
            ]
        },
        {
            title: 'Tùy chọn',
            items: [
                {
                    title: 'Quyền riêng tư',
                    iconName: 'ios-shield',
                    iconBackground: '#2cb7de',
                    iconColor: '#fff',
                    rightComponent: null
                },
                {
                    title: 'Thông báo',
                    iconName: 'ios-notifications',
                    iconBackground: '#9345ed',
                    iconColor: '#fff',
                    rightComponent: null
                },
                {
                    title: 'Tin',
                    iconName: 'ios-albums',
                    iconBackground: '#4770f5',
                    iconColor: '#fff',
                    rightComponent: null
                },
                {
                    title: 'SMS',
                    iconName: 'ios-chatbubble',
                    iconBackground: '#9345ed',
                    iconColor: '#fff',
                    rightComponent: null
                },
                {
                    title: 'Cập nhật',
                    iconName: 'ios-download',
                    iconBackground: '#2cb7de',
                    iconColor: '#fff',
                    rightComponent: null
                },
            ]
        },
        {
            title: 'Tài khoản',
            items: [
                {
                    title: 'Cài đặt',
                    iconName: 'ios-settings',
                    iconBackground: 'rgb(0, 153, 255)',
                    iconColor: '#fff',
                    rightComponent: null
                },
                {
                    title: 'Báo lỗi',
                    iconName: 'ios-bug',
                    iconBackground: '#fa4848',
                    iconColor: '#fff',
                    rightComponent: null
                },
                {
                    title: 'Đăng xuất',
                    iconName: 'log-out',
                    iconBackground: '#333',
                    iconColor: '#fff',
                    rightComponent: null
                },
            ]
        }
    ]
    const renderList = () => {
        return listSections.map((section, key) => {
            return (
                <View>
                    <Text style={{marginVertical: 10, color: '#777'}}>{section.title}</Text>
                    {
                        section.items.map((item, i) => {
                            return (
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View style={[RootStyle.borderIcon, {backgroundColor: item.iconBackground}]}>
                                            <Icon color={item.iconColor} name={item.iconName} size={18} />
                                        </View>
                                        <Text style={RootStyle.fontNormalBold}>{item.title}</Text>
                                    </View>
                                    <View>
                                        {item.rightComponent}
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            )
        })
    }
    return (
        <SafeAreaView style={RootStyle.container}>
            <View style={{alignItems: 'center', marginVertical: 20}}>
                <Image source={auth.avatar} style={RootStyle.largeAvatar} />
                <Text style={{fontSize: 20, fontWeight: '600', marginTop: 15}}>{auth.fullName}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, marginHorizontal: 20,}}>
                {renderList()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen;