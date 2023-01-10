// init
import * as firebase from 'firebase/app';
// auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDCHxWQlsXRkwuxBLN-ilRQC_MroBJlMGU",
  authDomain: "dweet-v2.firebaseapp.com",
  projectId: "dweet-v2",
  storageBucket: "dweet-v2.appspot.com",
  messagingSenderId: "353470050538",
  appId: "1:353470050538:web:1c748dd5c7315374396793"
};

firebase.initializeApp(firebaseConfig);

export const authService = getAuth();
export const GoogleProvider = new GoogleAuthProvider();
export const GithubProvider = new GithubAuthProvider();

export const signPopup = (provider) => signInWithPopup(authService, provider);

export const createUser = async (email, password, errorfunc) => await createUserWithEmailAndPassword(authService, email, password).catch(error => {
  errorfunc( error.message.replace("Firebase: ", ""))
})

export const signUser = async (email, password, errorfunc) => await signInWithEmailAndPassword(authService, email, password).catch(error => {
  errorfunc( error.message.replace("Firebase: ", ""))
});

export const authOnchange = (sus, fail, init) => onAuthStateChanged(authService, (user) => {
  if (user) {
    sus(user);
  } else {
    fail();
  }
  init();
});