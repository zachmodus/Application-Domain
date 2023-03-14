import React, { useState } from "react";
import ForgetPasswordForm from './ForgetPasswordForm';
import ReactDOM from 'react-dom/client';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  const analytics = getAnalytics(app);
  





export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const auth = getAuth();


    const loggy = (e) => {

        signInWithEmailAndPassword(auth, email, pass)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("This user has been Signed In!! ")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
          });
        
        }



    const ForgetPass = (e) => {

        const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <ForgetPasswordForm/>
      </React.StrictMode>
    );
    }



    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button onClick={loggy}>Log In</button>
                <button onClick={ForgetPass}>Forgot Password ?</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )



}