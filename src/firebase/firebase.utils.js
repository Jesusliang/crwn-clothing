import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDJ5GgwXpNA7GTpzkb2x05OMZRn3T8oelQ",
  authDomain: "crwn-clothing-3fc3b.firebaseapp.com",
  projectId: "crwn-clothing-3fc3b",
  storageBucket: "crwn-clothing-3fc3b.appspot.com",
  messagingSenderId: "328209354352",
  appId: "1:328209354352:web:21673deb78399ad735aeb5",
  measurementId: "G-58D55DS12F",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
