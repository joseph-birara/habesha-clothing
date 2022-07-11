import firebase from 'firebase/compat/app'
   
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const config = {
  apiKey: "AIzaSyDXWfVdQnyWQGwDAtixzJ-SO0gp06-P2N4",
  authDomain: "habesha-db.firebaseapp.com",
  projectId: "habesha-db",
  storageBucket: "habesha-db.appspot.com",
  messagingSenderId: "762523981995",
  appId: "1:762523981995:web:52e5d0f393fd21b366ffee",
  measurementId: "G-EN1DZL6SZ8"
};

firebase.initializeApp(config);

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;