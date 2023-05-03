import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import ledger from './ledger';
import App from "./App";
import './App.css';
import ViewUserList from './ViewUsersList';
import ReactDOM from 'react-dom';
import ViewCOATable  from './JournalEntry/ViewGLTable';
import Navbar from './navbar';
import HomeButton from './Homebutton';
import AddAccountButton from './AddAccount/AddAccountButton';
import AddGLButton from './JournalEntry/AddGLButton';
import  ViewGLTable from './JournalEntry/ViewGLTable';



function AdminUser() {
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

//Add Accounts
const AddAccount = (e) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  ReactDOM.render(
    <React.StrictMode>
      <AddAccountButton/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
  //view Chart of Accounts
  const ViewCHOA = (e) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    ReactDOM.render(
      <React.StrictMode>
        <ViewCOATable/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  
//view user list
  const ViewUsers = (e) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    ReactDOM.render(
      <React.StrictMode>
        <ViewUserList />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  //view Journal entries
  const ViewGL = (e) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    ReactDOM.render(
      <React.StrictMode>
        <ViewGLTable />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  //add GL 
  const AddGL = (e) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    ReactDOM.render(
      <React.StrictMode>
        <AddGLButton />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewAccount(prevState => ({ ...prevState, [name]: value }));
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


      
                <h1>Admin User</h1>

          <div>
      <h1></h1>
      <Navbar/>
      <div>
      <HomeButton />
    </div>
    </div>
<h1 style={{ textAlign: 'center', color: 'white' }}>Admin User List</h1>

  <div>       
      <h2>Create Account</h2>
      <h3><button onClick={ViewUsers}>View Users</button></h3>
      <h3><button onClick={AddAccount}>Add Accounts</button></h3>
      <h3><button onClick={ViewCHOA}>View Chart of Accounts</button></h3>
      <h3><button onClick={AddGL}>Add Journal Entry</button></h3>
      <h3><button onClick={ViewGL}>View Journal Entries</button></h3>
    </div>  
  </div>
  
  )}
          export default AdminUser;

