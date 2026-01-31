// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUb79zLjxh2pc21uuT90xSS9u1mz4M_8Y",
  authDomain: "prepilot-2b006.firebaseapp.com",
  projectId: "prepilot-2b006",
  storageBucket: "prepilot-2b006.firebasestorage.app",
  messagingSenderId: "282319383326",
  appId: "1:282319383326:web:17bc37a0fde41dad0db70f",
  measurementId: "G-FQ90DGGCR1"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);