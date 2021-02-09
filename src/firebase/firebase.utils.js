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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); 

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;