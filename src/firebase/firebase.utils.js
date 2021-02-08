import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCKs_8m4mXBkBjF_3PZKiXGOWTMmxTNZx4",
    authDomain: "e-commerce-e3a65.firebaseapp.com",
    projectId: "e-commerce-e3a65",
    storageBucket: "e-commerce-e3a65.appspot.com",
    messagingSenderId: "795514535374",
    appId: "1:795514535374:web:757a247f4269026e7dff9f",
    measurementId: "G-33GXJMQSC1"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;