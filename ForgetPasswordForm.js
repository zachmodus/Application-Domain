import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';

function ForgetPasswordForm() {
  const [email, setEmail] = useState("");
  const [userid, setUserId] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g. call Firebase auth functions
  };

  return (
    <div className="ForgetPasswordForm">
        <h1 style={{ textAlign: 'center', color: 'white' }}>Forgot Password</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <input
          type="text"
          placeholder="User ID"
          value={userid}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgetPasswordForm;
