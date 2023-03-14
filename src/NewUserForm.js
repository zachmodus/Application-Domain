import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import App from "./App";
import ReactDOM from 'react-dom/client';

//import { app} from "./firebase";

function NewUserForm() {
    return (
       <div className = "NewUserForm">
        <form>
        <input type = "text" placeholder = "First Name...." />
        <input type = "text" placeholder = "Last Name" />
        <input type = "text" placeholder = "DOB" />
        <input type = "text" placeholder = "Address" />
        <button onClick={HomePage}>Home</button>;

        
        
        </form>
        </div>
        );
    }

    const HomePage = (e) => {

        const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    );
    }


    

export default NewUserForm;