import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwPN2r-wdPW5WC6VhTGu9fi34Z_GAScyg",
    authDomain: "clone-5aea7.firebaseapp.com",
    projectId: "clone-5aea7",
    storageBucket: "clone-5aea7.appspot.com",
    messagingSenderId: "740066040464",
    appId: "1:740066040464:web:cd38757bf9e471154c9615",
    measurementId: "G-JJESGVP7RB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };