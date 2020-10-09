import FirebaseService from '../plugins/firebaseService';
import * as firebaseNodes from '../constants/firebaseNodes';

const Messenger = {
    redirectToConversation(navigation, data) {
        console.log(data);
        navigation.navigate('Conversation', data);
    },
    async createUserChatBetween(senderId, otherId) {
        let senderNode = `${firebaseNodes.USERS}/${senderId}/conversations/${otherId}`;
        let otherNode = `${firebaseNodes.USERS}/${otherId}/conversations/${senderId}`;
        await FirebaseService.node(senderNode).ref().once('value', async (senderSnapshot) => {
            if (!senderSnapshot.exists()) {
                await FirebaseService.node(otherNode).ref().once('value', async (otherSnapshot) => {
                    if (!otherSnapshot.exists()) {
                        let date = new Date().getTime();
                        let conversation = {
                            last_message: '',
                            coversation_id: this.randomString(),
                            users: [senderId, otherId],
                            theme_color: 'rgb(0, 153, 255)',
                            created_at: date,
                            updated_at: date,
                        };
                        FirebaseService.node(senderNode).create(conversation);
                        FirebaseService.node(otherNode).create(conversation);
                        return coversation_id;
                    }
                });
            }
        });
    },
    updateUserConversation(senderId, otherId, data) {
        let time = new Date().getTime();
        let attributes = { last_message, theme_color } = data;
        let dataUpdate = {
            updated_at: time
        }
        for (let attribute of Object.keys(attributes)) {
            if (attributes[attribute]) {
                dataUpdate[attribute] = attributes[attribute];
            }
        }
        let senderNode = `${firebaseNodes.USERS}/${senderId}/conversations/${otherId}`;
        let otherNode = `${firebaseNodes.USERS}/${otherId}/conversations/${senderId}`;
        FirebaseService.node(senderNode).update(dataUpdate);
        FirebaseService.node(otherNode).update(dataUpdate);
    },
    randomString() {
        return Math.random().toString(36).substring(2);
    },
}

export default Messenger;