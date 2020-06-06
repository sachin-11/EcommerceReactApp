import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAw0Hr9yAtUcSPd5k9iEXBi8hWfONSwemA',
  authDomain: 'shopping-db-ba422.firebaseapp.com',
  databaseURL: 'https://shopping-db-ba422.firebaseio.com',
  projectId: 'shopping-db-ba422',
  storageBucket: 'shopping-db-ba422.appspot.com',
  messagingSenderId: '685328487265',
  appId: '1:685328487265:web:9b614c897aaf5b9e6feb20',
  measurementId: 'G-HYKGQXHMQ8',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
