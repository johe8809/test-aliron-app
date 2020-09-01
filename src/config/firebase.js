import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// TODO: change credentials into .env file
const firebaseConfig = {
  apiKey: 'AIzaSyCkmDlV7O7nFQY2ddoygqBIEHN1h64FemQ',
  authDomain: 'test-aliron-app.firebaseapp.com',
  databaseURL: 'https://test-aliron-app.firebaseio.com',
  projectId: 'test-aliron-app',
  storageBucket: 'test-aliron-app.appspot.com',
  messagingSenderId: '591007439733',
  appId: '1:591007439733:web:9fd457867f3db281a2d13c',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();
