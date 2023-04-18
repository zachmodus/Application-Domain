import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import NewUserForm from './NewUserForm';


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { app} from "./firebase";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

//export default app


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const auth = getAuth(app);


    const reggy = (e) => {
  
      createUserWithEmailAndPassword(auth, email,pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert ("Succesfully created an account")
         
  
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
       // const errorMessage = error.message;
       alert (errorCode)
        // ..
      });
  e.preventDefault();
    }


    const CNU = (e) => {

        const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <NewUserForm/>
      </React.StrictMode>
    );
    }
    





    return (
        <div className="login-form">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button onClick={reggy}>Log In</button>
            <button onClick={CNU}>Create New User</button>

        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
