// Import the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJKXhDvvMn_PvI3jrsymak7iLW-ZO0Jac",
  authDomain: "app-domain-project.firebaseapp.com",
  projectId: "app-domain-project",
  storageBucket: "app-domain-project.appspot.com",
  messagingSenderId: "172289183380",
  appId: "1:172289183380:web:4d72366d3cb6df22722e81",
  measurementId: "G-BLNDN3BCMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export const db = getFirestore(app)

export { app, analytics, firestore };

