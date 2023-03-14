import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import App from "./App";
import ReactDOM from 'react-dom/client';

//import { app} from "./firebase";

function ForgetPasswordForm() {
    return (
       <div className = "ForgetPasswordForm">
        <form>
        <input type = "text" placeholder = "email" />
        <input type = "text" placeholder = "userid" />

        <button>Homeee</button>;

        
        
        </form>
        </div>
        );
    }
    export default ForgetPasswordForm;
