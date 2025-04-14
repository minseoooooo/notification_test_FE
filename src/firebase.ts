// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDL-mXvggPAunkOYLqgWtyG93wfHFCfdn0",
    authDomain: "bookwoori-554cd.firebaseapp.com",
    projectId: "bookwoori-554cd",
    messagingSenderId: "284274466098",
    appId: "1:284274466098:web:576b71a9c0b4e873c60b2b",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export { messaging };
