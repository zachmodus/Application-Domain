import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import App from "./App";
import ReactDOM from 'react-dom/client';

//import { app} from "./firebase";

function NewUserForm() {
    return (
      
       <div className = "NewUserForm">
        <form>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Create New User</h1>

        <input type = "text" placeholder = "First Name" />
        <br/>
        <input type = "text" placeholder = "Last Name" />
        <br/>
        <input type = "text" placeholder = "DOB" />
        <br/>
        <input type = "text" placeholder = "Address" />
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <button onClick={HomePage}>Home</button>
</div>
      

        
        
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