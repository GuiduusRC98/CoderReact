// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "cadep-coder.firebaseapp.com",
  projectId: "cadep-coder",
  storageBucket: "cadep-coder.appspot.com",
  messagingSenderId: "1080435607005",
  appId: "1:1080435607005:web:8961ef40ad6b0116dc2234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)