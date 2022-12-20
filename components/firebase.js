import * as firebase from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const authService = getAuth;

// export const createUser = async (email, password, errorfunc) => await createUserWithEmailAndPassword(authService, email, password).catch(error => {
//   errorfunc( error.message.replace("Firebase: ", ""))
// })

// export const signUser = async (email, password, errorfunc) => await signInWithEmailAndPassword(authService, email, password).catch(error => {
//   errorfunc( error.message.replace("Firebase: ", ""))
// });

// export const authOnchange = (sus, fail, init) => onAuthStateChanged(authService, (user) => {
//   console.log(user);
//   // if (user) {
//   //   sus(user);
//   // } else {
//   //   fail();
//   // }
//   // init();
// });


// export const GoogleProvider = new GoogleAuthProvider();
// export const GithubProvider = new GithubAuthProvider();
// export const signPopup = (provider) => signInWithPopup(authService, provider);

// export const dbService = getFirestore();

// export const storageService = getStorage(); 