import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB0rXRGlinP_DHPW56aGz82G-otUpJV_lc",
    authDomain: "whatsapp-clone-9e8c6.firebaseapp.com",
    projectId: "whatsapp-clone-9e8c6",
    storageBucket: "whatsapp-clone-9e8c6.appspot.com",
    messagingSenderId: "1087626784961",
    appId: "1:1087626784961:web:5dcb046a2eaaea7738e440"
  };

  const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};