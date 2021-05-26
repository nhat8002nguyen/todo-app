import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDa1g4LJld10e9zF2x3Cb5fUIwVUTlqtiE",
    authDomain: "todo-app-4d7a3.firebaseapp.com",
    databaseURL:
        "https://todo-app-4d7a3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todo-app-4d7a3",
    storageBucket: "todo-app-4d7a3.appspot.com",
    messagingSenderId: "629538665467",
    appId: "1:629538665467:web:f28f7f99f849ac64d2115e",
    measurementId: "G-VG6MBV3B6F"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
