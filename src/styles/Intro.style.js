import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1
    },
    page: {
        flex: 1,
        width: screen.width,
        height: screen.height,
        justifyContent: 'center',
        alignItems: 'center',
    }
});