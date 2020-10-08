const Messenger = {
    redirectToConversation(navigation, data) {
        console.log(data);
        navigation.navigate('Conversation', data);
    }
}

export default Messenger;