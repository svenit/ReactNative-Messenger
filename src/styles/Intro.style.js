import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    page: {
        flex: 1,
        width: screen.width,
        height: screen.height,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    pageImage: {
        width: 250,
        height: 250
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10
    }
});