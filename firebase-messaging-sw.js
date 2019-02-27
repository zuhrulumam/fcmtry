importScripts("https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/5.8.4/firebase-messaging.js")

var config = {
    apiKey: "YOUR API KEY",
    authDomain: "XXXX.firebaseapp.com",
    databaseURL: "https://XXXX.firebaseio.com",
    projectId: "XXXX",
    storageBucket: "XXXX.appspot.com",
    messagingSenderId: "XXXXXXX"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();