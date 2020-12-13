import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ5GgwXpNA7GTpzkb2x05OMZRn3T8oelQ",
  authDomain: "crwn-clothing-3fc3b.firebaseapp.com",
  databaseURL: "https://crwn-clothing-3fc3b-default-rtdb.firebaseio.com",
  projectId: "crwn-clothing-3fc3b",
  storageBucket: "crwn-clothing-3fc3b.appspot.com",
  messagingSenderId: "328209354352",
  appId: "1:328209354352:web:21673deb78399ad735aeb5",
  measurementId: "G-58D55DS12F",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
