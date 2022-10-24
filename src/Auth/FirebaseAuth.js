import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZI81nR0lRyqWCoBXVvlBpVr_YUf620VI",
  authDomain: "news-app-1d0a5.firebaseapp.com",
  projectId: "news-app-1d0a5",
  storageBucket: "news-app-1d0a5.appspot.com",
  messagingSenderId: "451378959014",
  appId: "1:451378959014:web:1faa347fb56c829dd65a67",
  measurementId: "G-P58KQ0KMRQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPass = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

const signInWithEmailAndPass = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

const signOutFromEverywhere = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  registerWithEmailAndPass,
  signInWithEmailAndPass,
  signOutFromEverywhere,
};
