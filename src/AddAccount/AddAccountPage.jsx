import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import '../App.css';
import ReactDOM from 'react-dom';
import { Table } from 'react-bootstrap';




function AddAccountPage() {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [newAccount, setNewAccount] = useState({
          name: '',
          number: '',
          description: '',
          normalSide: '',
          category: '',
          subcategory: '',
          balance: '',
          debit: '',
          credit: '',
          curbalance: '',
          date: '',
          user: '',
          order: '',
          statement: '',
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

    // Fetch the list of accounts from Firebase
    const accountsRef = firebase.database().ref('accounts');
    accountsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const accountsList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setAccounts(accountsList);
      } else {
        setAccounts([]);
      }
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewAccount(prevState => ({ ...prevState, [name]: value }));
  };

   const handleCreateAccount = (event) => {
    // Send a POST request to Firebase to create a new account
    event.preventDefault();
    const accountsRef = firebase.database().ref('accounts');
    const newAccountRef = accountsRef.push();
    newAccountRef.set(newAccount)
      .then(() => {
        const account = { id: newAccountRef.key, ...newAccount };
        setAccounts([...accounts, account]);
        setNewAccount({
          name: '',
          number: '',
          description: '',
          normalSide: '',
          category: '',
          subcategory: '',
          balance: '',
          debit: '',
          credit: '',
          curbalance: '',
          date: '',
          user: '',
          order: '',
          statement: '',
          comment: ''
        });
      })
      .catch((error) => {
        console.error('Error creating account:', error);
      });
  };  

  const handleAccountClick = (accountId) => {
    const accountRef = firebase.database().ref(`accounts/${accountId}`);
    accountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSelectedAccount({ id: accountId, ...data });
      } else {
        setSelectedAccount(null);
      }
    });
  };


  return (
    
    <div>
<h1 style={{ textAlign: 'center', color: 'white' }}>Add Account</h1>

  <div>       
      <h2>Create Account</h2>
              <form onSubmit={handleCreateAccount}>
              <Table bordered striped> 
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Account Name</th>
            <th>Account Description</th>
            <th>Normal Side</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Opening Balance</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Date</th>
            <th>Current Balance</th>
            <th>User</th>
            <th>Order</th>
            <th>Statement</th>
            <th>Comment</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><input type="text" id="number" name="number" value={newAccount.number} onChange={handleChange} /></td>
            <td><input type="text" id="name" name="name" value={newAccount.name} onChange={handleChange} /></td>
            <td><input type="text" id="description" name="description" value={newAccount.description} onChange={handleChange} /></td>
            <td> <select id="normalSide" name="normalSide" value={newAccount.normalSide} onChange={handleChange}>
            <option value="debit">Debit</option>
            <option value="credit">Credit</option>
            </select>
        </td>
          <td><input type="text" id="category" name="category" value={newAccount.category} onChange={handleChange} /></td>
          <td><input type="text" id="subcategory" name="subcategory" value={newAccount.subcategory} onChange={handleChange} />    </td>      
          <td><input type="number" id="balance" name="balance" value={newAccount.balance} onChange={handleChange} /></td>
          <td><input type="number" id="debit" name="debit" value={newAccount.debit} onChange={handleChange} /></td>
          <td><input type="number" id="credit" name="credit" value={newAccount.credit} onChange={handleChange} /></td>
          <td><input type="date" id="date" name="date" value={newAccount.date} onChange={handleChange} /></td>
          <td><input type="number" id="curBalance" name="curBalance" value={newAccount.curBalance} onChange={handleChange} /></td>
          <td><input type="text" id="user" name="user" value={newAccount.user} onChange={handleChange} /></td>
          <td><input type="number" id="order" name="order" value={newAccount.order} onChange={handleChange} /></td>
          <td><input type="text" id="statement" name="statement" value={newAccount.statement} onChange={handleChange} /></td>
          <td><input type="text" id="comment" name="comment" value={newAccount.comment} onChange={handleChange} /></td>
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
          export default AddAccountPage;
