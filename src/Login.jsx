import React, { useState } from "react";
import ForgetPasswordForm from './ForgetPasswordForm';
import ReactDOM from 'react-dom/client';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import AdminUser from "./AdminUser";
import CreateUser from "./CreateUser";

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
    const [attempts, setAttempts] = useState(0);
    const [isSuspended, setIsSuspended] = useState(false);
  
  



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
}


const handlePasswordChange = (event) => {
  setPass(event.target.value);
}


const handleLoginFormSubmit = (event) => {
  event.preventDefault();

  if (isSuspended) {
    alert('Your account has been suspended due to too many failed attempts. Please contact customer support.');
    return;
  }

  if (pass === 'correctpassword') {
    alert('Login successful!');
  } else {
    setAttempts(attempts + 1);

    if (attempts === 2) {
      setIsSuspended(true);
      alert('Too many failed login attempts. Your account has been suspended. Please contact customer support.');
    } else {
      alert('Incorrect password. Please try again.');
    }
  }
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


    const Adminy = (e) => {

      const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <AdminUser/>
    </React.StrictMode>
  );
  }
  const Adminy2 = (e) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateUser/>
  </React.StrictMode>
);
}


    return (
        <div className="auth-form-container">
          <div className="title-container"></div>
              
              
                <h1>CREAM ACCOUNTING</h1>

            <h2>Login</h2>
            <form className="login-form" onSubmit={handleLoginFormSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password" value={pass} onChange={handlePasswordChange}>
                Password:
                </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br/>
                <button onClick={loggy}>Log In</button>
                <br/>
                <button onClick={ForgetPass}>Forgot Password ?</button>
                <br/>
                <button onClick={Adminy}>Admin Create Account</button>
                <br/>
                <button onClick={Adminy2}>Create Admin User </button>



            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>

            <h4>
              <em>Accounting for all</em>
                
                </h4>
        </div>
    )



}
