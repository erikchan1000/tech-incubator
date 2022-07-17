import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCFLNP6OvwnLlaSYEFfGHk1GzkWPVtnQsQ",
  authDomain: "auth-development-55cd0.firebaseapp.com",
  databaseURL: "https://auth-development-55cd0-default-rtdb.firebaseio.com",
  projectId: "auth-development-55cd0",
  storageBucket: "auth-development-55cd0.appspot.com",
  messagingSenderId: "800329289967",
  appId: "1:800329289967:web:035382695796a67b164b1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const db = getFirestore(app);

export const auth = getAuth();