import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import App from "./App";

function CreateUser() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    // Initialize Firebase with your project's config
    firebase.initializeApp({
     apiKey: "AIzaSyCJKXhDvvMn_PvI3jrsymak7iLW-ZO0Jac",
    authDomain: "app-domain-project.firebaseapp.com",
    projectId: "app-domain-project",
    storageBucket: "app-domain-project.appspot.com",
    messagingSenderId: "172289183380",
    appId: "1:172289183380:web:4d72366d3cb6df22722e81",
    measurementId: "G-BLNDN3BCMJ"
    });

    // Fetch the list of users from Firebase
    const usersRef = firebase.database().ref('users');
    usersRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setUsers(usersList);
      } else {
        setUsers([]);
      }
    });
  }, []);

  const handleCreateUser = () => {
    // Send a POST request to Firebase to create a new user
    const usersRef = firebase.database().ref('users');
    const newUserRef = usersRef.push();
    newUserRef.set(newUser)
      .then(() => {
        const user = { id: newUserRef.key, ...newUser };
        setUsers([...users, user]);
        setNewUser({ name: '', email: '', password: '' });
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  const handleDeleteUser = (userId) => {
    // Send a DELETE request to Firebase to delete the user
    const userRef = firebase.database().ref(`users/${userId}`);
    userRef.remove()
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div>
<h1 style={{ textAlign: 'center', color: 'white' }}>Admin User</h1>
      <div>
        <h2>Create User - Admin</h2>
        <form onSubmit={handleCreateUser}>
        <input type="text" placeholder="Name" value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} />
        <br/>
        <input type="email" placeholder="Email" value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
        <br/>
        <input type="password" placeholder="Password" value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
        <br/>
        <button type="submit" style={{
  margin: "0 auto",    // Center the button
  display: "block",   // Change display property to "block"
  padding: "10px",    // Add padding to the button
  backgroundColor: "orange", // Set background color
  color: "white",     // Set text color
  borderRadius: "5px", // Add border radius
  cursor: "pointer"   // Add cursor pointer
}}>
  Create
</button> 
</form>

      </div>
      <div>
        <h2>User List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button
    onClick={() => handleDeleteUser(user.id)}
    style={{
      backgroundColor: "red",   // Set background color
      color: "white",           // Set text color
      padding: "10px",          // Add padding
      borderRadius: "5px",     // Add border radius
      border: "none",          // Remove border
      cursor: "pointer",       // Add cursor pointer
      marginTop: "10px"        // Add margin top
    }}
  >
    Delete
  </button>            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreateUser;
