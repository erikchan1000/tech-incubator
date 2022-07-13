import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCFLNP6OvwnLlaSYEFfGHk1GzkWPVtnQsQ",
  authDomain: "auth-development-55cd0.firebaseapp.com",
  projectId: "auth-development-55cd0",
  storageBucket: "auth-development-55cd0.appspot.com",
  messagingSenderId: "800329289967",
  appId: "1:800329289967:web:035382695796a67b164b1a"
})

export const auth = app.auth();

export default app;