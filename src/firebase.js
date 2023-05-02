import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { ref, getDatabase} from 'firebase/database'; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCJKXhDvvMn_PvI3jrsymak7iLW-ZO0Jac",
    authDomain: "app-domain-project.firebaseapp.com",
    projectId: "app-domain-project",
    storageBucket: "app-domain-project.appspot.com",
    messagingSenderId: "172289183380",
    appId: "1:172289183380:web:4d72366d3cb6df22722e81",
    measurementId: "G-BLNDN3BCMJ"
  };
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);

  return getDatabase(app);
}

export default StartFirebase;
