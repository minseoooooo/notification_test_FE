// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyDL-mXvggPAunkOYLqgWtyG93wfHFCfdn0",
    authDomain: "bookwoori-554cd.firebaseapp.com",
    projectId: "bookwoori-554cd",
    messagingSenderId: "284274466098",
    appId: "1:284274466098:web:576b71a9c0b4e873c60b2b",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("[firebase-messaging-sw.js] 백그라운드 메시지 수신:", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
