// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-state-77cbd.firebaseapp.com",
  projectId: "mern-real-state-77cbd",
  storageBucket: "mern-real-state-77cbd.appspot.com",
  messagingSenderId: "165383136489",
  appId: "1:165383136489:web:231497b10ce7dc35fbfc78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);