import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC1ZJa6xzVYouTJyuN5uzHJYoTpbR_nizk",
    authDomain: "discord-2-47bea.firebaseapp.com",
    projectId: "discord-2-47bea",
    storageBucket: "discord-2-47bea.appspot.com",
    messagingSenderId: "1081007869050",
    appId: "1:1081007869050:web:4d4c9bae1dfdc7630d3fc3",
    measurementId: "G-BL1RGQW7X4"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };