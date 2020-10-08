import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBcSjpIV0lWX2Cy_35NyzRj34nfJwat5cI",
    authDomain: "react-native-chat-564f9.firebaseapp.com",
    databaseURL: "https://react-native-chat-564f9.firebaseio.com",
    projectId: "react-native-chat-564f9",
    storageBucket: "react-native-chat-564f9.appspot.com",
    messagingSenderId: "987913518286",
    appId: "1:987913518286:web:6d4248a41b0e5389e9649f",
    measurementId: "G-EWKJQL7TN6"
};

firebase.initializeApp(firebaseConfig);

export default  {
    database: firebase.database(),
    currentNode: null,
    node(node) {
        this.currentNode = node;
        return this;
    },
    ref() {
        return this.database.ref(this.currentNode);
    },
    create(data) {
        return this.database.ref(this.currentNode).set(data, this.handleError);
    },
    update(data) {
        return this.database.ref(this.currentNode).update(data);
    },
    delete() {
        return this.database.ref(this.currentNode).remove();
    },
    handleError(e) {
        console.log(e);
    },
}


