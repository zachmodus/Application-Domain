// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Initialize Firebase
firebase.initializeApp({

        apiKey: "AIzaSyCJKXhDvvMn_PvI3jrsymak7iLW-ZO0Jac",
        authDomain: "app-domain-project.firebaseapp.com",
        projectId: "app-domain-project",
        storageBucket: "app-domain-project.appspot.com",
        messagingSenderId: "172289183380",
        appId: "1:172289183380:web:4d72366d3cb6df22722e81",
        measurementId: "G-BLNDN3BCMJ"
});

const db = firebase.firestore();

// Function to retrieve account data
export const getAccounts = async () => {
  const snapshot = await db.collection("accounts").get();
  const accounts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return accounts;
};

