import FirebaseService from '../plugins/firebaseService';
import * as firebaseNodes from '../constants/firebaseNodes';

const Messenger = {
    redirectToConversation(navigation, data) {
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
                            is_show: false,
                            last_message: '',
                            coversation_id: this.randomString(),
                            users: [senderId, otherId],
                            theme_color: 'rgb(0, 132, 255)',
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
    updateUserConversation(senderId, otherId, data, onlyActor = false) {
        let time = new Date().getTime();
        let attributes = { last_message, theme_color, is_show} = data;
        let dataUpdate = {
            updated_at: time,
            is_show: true,
        }
        for (let attribute of Object.keys(attributes)) {
            dataUpdate[attribute] = attributes[attribute];
        }
        let senderNode = `${firebaseNodes.USERS}/${senderId}/conversations/${otherId}`;
        let otherNode = `${firebaseNodes.USERS}/${otherId}/conversations/${senderId}`;
        FirebaseService.node(senderNode).update(dataUpdate);
        if (onlyActor) {
            return;
        }
        FirebaseService.node(otherNode).update(dataUpdate);
    },
    deleteConversation(conversationId, senderId, otherId) {
        this.updateUserConversation(senderId, otherId, {
            is_show: false,
            last_message: "",
        }, true);
        FirebaseService.node(`${firebaseNodes.CONVERSATIONS}/${conversationId}`).ref().once('value', snapshot => {
            snapshot.forEach(function(child) {
                if (child.val().deleted_by) {
                    child.ref.remove();
                }
                else {
                    child.ref.update({
                        deleted_by: senderId
                    });
                }
            });
        });
    },
    randomString() {
        return Math.random().toString(36).substring(2);
    },
}

export default Messenger;