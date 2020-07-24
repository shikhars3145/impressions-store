import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyA-TTC816JxLxuCA1AV_pnz1TNOmkw5BnQ',
//   authDomain: 'impressions-store.firebaseapp.com',
//   databaseURL: 'https://impressions-store.firebaseio.com',
//   projectId: 'impressions-store',
//   storageBucket: 'impressions-store.appspot.com',
//   messagingSenderId: '393246840123',
//   appId: '1:393246840123:web:19e7ff7ecdecdc7f52931e',
//   measurementId: 'G-PQ1HY1S5C3',
// };

console.log(firebaseConfig);
// console.log(firebaseConfig1);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
