import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import '../App.css';
import ReactDOM from 'react-dom';
import { Table } from 'react-bootstrap';




function AddGLPage() {
  const [journalEntries, setGLs] = useState([]);
  const [selectedGL, setSelectedGL] = useState(null);
  const [newGL, setNewGL] = useState({
          
          name: '',
          number: '',
          debit: '',
          credit: '',
          date: '',
          user: '',
          comment: ''
  });

  useEffect(() => {
    // Initialize Firebase with your project's config
    firebase.initializeApp({
      apiKey: "AIzaSyCJKXhDvvMn_PvI3jrsymak7iLW-ZO0Jac",
      authDomain: "app-domain-project.firebaseapp.com",
      projectId: "app-domain-project",
      storageBucket: "app-domain-project.appspot.com",
      messagingSenderId: "172289183380",
      appId: "1:172289183380:web:4d72366d3cb6df22722e81",
      measurementId: "G-BLNDN3BCMJ"    });

    // Fetch the list of GLs from Firebase
    const GLsRef = firebase.database().ref('journalEntries');
    GLsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const GLsList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setGLs(GLsList);
      } else {
        setGLs([]);
      }
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewGL(prevState => ({ ...prevState, [name]: value }));
  };

   const handleCreateGL = (event) => {
    // Send a POST request to Firebase to create a new GL
    event.preventDefault();
    const GLsRef = firebase.database().ref('GLs');
    const newGLRef = GLsRef.push();
    newGLRef.set(newGL)
      .then(() => {
        const GL = { id: newGLRef.key, ...newGL };
        setGLs([...journalEntries, GL]);
        setNewGL({
          name: '',
          number: '',
          debit: '',
          credit: '',
          date: '',
          user: '',
          comment: ''
        });
      })
      .catch((error) => {
        console.error('Error creating GL:', error);
      });
  };  

  const handleGLClick = (GLId) => {
    const GLRef = firebase.database().ref(`GLs/${GLId}`);
    GLRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSelectedGL({ id: GLId, ...data });
      } else {
        setSelectedGL(null);
      }
    });
  };


  return (
    
    <div>
<h1 style={{ textAlign: 'center', color: 'white' }}>Add GL</h1>

  <div>       
      <h2>Create GL</h2>
              <form onSubmit={handleCreateGL}>
              <Table bordered striped> 
        <thead>
          <tr>
            <th>GL Number</th>
            <th>GL Name</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Date</th>
            <th>User</th>
            <th>Comment</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            
            <td><input type="text" id="name" name="name" value={newGL.name} onChange={handleChange} /></td>
            <td><input type="text" id="number" name="number" value={newGL.number} onChange={handleChange} /></td>
            <td><input type="number" id="debit" name="debit" value={newGL.debit} onChange={handleChange} /></td>
          <td><input type="number" id="credit" name="credit" value={newGL.credit} onChange={handleChange} /></td>
          <td><input type="date" id="date" name="date" value={newGL.date} onChange={handleChange} /></td>
          <td><input type="text" id="user" name="user" value={newGL.user} onChange={handleChange} /></td>
          <td><input type="text" id="comment" name="comment" value={newGL.comment} onChange={handleChange} /></td>
          </tr>
          </tbody>
</Table>
          <button type="submit" style={{
  margin: "0 auto",    // Center the button
  display: "block",   // Change display property to "block"
  padding: "10px",    // Add padding to the button
  backgroundColor: "orange", // Set background color
  color: "white",     // Set text color
  borderRadius: "5px", // Add border radius     // Remove border
  cursor: "pointer"   // Add cursor pointer
}}>
  Create
</button>       
        </form>
      </div>
      <div style={{background: 'linear-gradient(to right, #7439db, #C66FBC 48%, #F7944D)'}}>
      </div>
    </div>


  );
 }
          export default AddGLPage;
