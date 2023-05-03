import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

function CreateAccount() {

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

  const handleCreateAccount = () => {
    // Send a POST request to Firebase to create a new account
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
}

