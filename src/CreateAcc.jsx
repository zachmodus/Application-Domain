import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import ledger from './ledger';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './table.css';
import Navbar from './navbar';
import Calendar from './calender';
function CreateAcc(props) {

    const [accounts, setAccounts] = useState([]);
    const [isDescending, setIsDescending] = useState(false);
  
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [newAccount, setNewAccount] = useState({
      accountName: '',
      accountNumber: '',
      accountDescription: '',
      normalSide: '',
      accountCategory: '',
      accountSubcategory: '',
      initialBalance: '',
      debit: '',
      credit: '',
      balance: '',
      dateAdded: '',
      userId: '',
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
  
    const handleCreateAccount = (e) => {
      e.preventDefault();
  
      // Send a POST request to Firebase to create a new account
      const accountsRef = firebase.database().ref('accounts');
      const newAccountRef = accountsRef.push();
      newAccountRef.set(newAccount)
        .then(() => {
          const account = { id: newAccountRef.key, ...newAccount };
          setAccounts([...accounts, account]);
          setNewAccount({
            accountName: '',
            accountNumber: '',
            accountDescription: '',
            normalSide: '',
            accountCategory: '',
            accountSubcategory: '',
            initialBalance: '',
            debit: '',
            credit: '',
            balance: '',
            dateAdded: '',
            userId: '',
            order: '',
            statement: '',
            comment: ''
          });
        })
        .catch((error) => {
          console.error('Error creating account:', error);
        });
    };
  
  
  
    const handleSort = () => {
      setIsDescending(!isDescending);
      const sortedAccounts = [...accounts].sort((a, b) => {
        return isDescending ? b.balance - a.balance : a.balance - b.balance;
      });
      setAccounts(sortedAccounts);
    };
  
  
    const accountList = accounts.map((account) => (
      <li key={account.id}>
        {account.name} - Balance: {account.balance}
      </li>
    ));
  
    const handleDeleteAccount = (accountId) => {
      // Send a DELETE request to Firebase to delete the account
      const accountRef = firebase.database().ref(`accounts/${accountId}`);
      accountRef.remove()
        .then(() => {
          setAccounts(accounts.filter(account => account.id !== accountId));
        })
        .catch((error) => {
          console.error('Error deleting account:', error);
        });
    };
    const handleChange = (event) => {
      const { name, value } = event.target;
      setNewAccount(prevState => ({ ...prevState, [name]: value }));
    };
  
  
    const sortedAccounts = accounts.sort((a, b) => b.balance - a.balance);
  
   
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
    <h2>Create Account</h2>
    <form className="admin-form" onSubmit={handleCreateAccount}>
      <label htmlFor="name">Account Name:</label>
      <input type="text" id="name" name="name" value={newAccount.name} onChange={handleChange} />
      
      <label htmlFor="number">Account Number:</label>
      <input type="text" id="number" name="number" value={newAccount.number} onChange={handleChange} />
      
      <label htmlFor="description">Account Description:</label>
      <input type="text" id="description" name="description" value={newAccount.description} onChange={handleChange} />
      
      <label htmlFor="normalSide">Normal Side:</label>
      <select id="normalSide" name="normalSide" value={newAccount.normalSide} onChange={handleChange}>
        <option value="debit">Debit</option>
        <option value="credit">Credit</option>
      </select>
      
      <label htmlFor="category">Account Category:</label>
      <input type="text" id="category" name="category" value={newAccount.category} onChange={handleChange} />
      
      <label htmlFor="subcategory">Account Subcategory:</label>
      <input type="text" id="subcategory" name="subcategory" value={newAccount.subcategory} onChange={handleChange} />
      
      <label htmlFor="balance">Initial Balance:</label>
      <input type="number" id="balance" name="balance" value={newAccount.balance} onChange={handleChange} />
      
      <label htmlFor="debit">Debit:</label>
      <input type="number" id="debit" name="debit" value={newAccount.debit} onChange={handleChange} />
      
      <label htmlFor="credit">Credit:</label>
      <input type="number" id="credit" name="credit" value={newAccount.credit} onChange={handleChange} />
      
      <label htmlFor="date">Date Added:</label>
      <input type="date" id="date" name="date" value={newAccount.date} onChange={handleChange} />
      
      <label htmlFor="user">User ID:</label>
      <input type="text" id="user" name="user" value={newAccount.user} onChange={handleChange} />
      
      <label htmlFor="order">Order:</label>
      <input type="number" id="order" name="order" value={newAccount.order} onChange={handleChange} />
      
      <label htmlFor="statement">Statement:</label>
      <input type="text" id="statement" name="statement" value={newAccount.statement} onChange={handleChange} />
      
      <label htmlFor="comment">Comment:</label>
      <input type="text" id="comment" name="comment" value={newAccount.comment} onChange={handleChange} />
      
      <button type="submit">Create</button>
    </form>
  </div>
  );
}

export default CreateAcc;