import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative'
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
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        right: 30,
        top: 60,
        zIndex: 2,
        borderRadius: 50,
        backgroundColor: '#f2f2f2',
        padding: 0,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButtonIcon: {
        margin: 10,
        color: '#ccc'
    }
});