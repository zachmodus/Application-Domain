import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import ledger from './ledger';
import App from "./App";
import './App.css';
import ViewUserList from './ViewUsersList';
import ReactDOM from 'react-dom';
import ViewCOATable from './Table Stuff/COATableview';
import creamLogo from './images/creamlogo (2).png';


function AdminUser() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [journalEntry, setJournalEntry] = useState({});
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

  
  // Function to log events
  const logEvent = (eventName, eventData) => {
    const newLog = { eventName, eventData, timestamp: new Date() };
    setJournalEntries(prevEntries => [...prevEntries, newLog]);
  };

  // Function to handle a change event
  const handleChange2 = (journalEvent) => {
    const { name, value } = journalEvent.target;
    setJournalEntry(prevEntry => ({ ...prevEntry, [name]: value }));
  };

  // Function to handle the submission of the form
  const handleSubmit = (journalEvent) => {
    journalEvent.preventDefault();
    setJournalEntries(prevEntries => [...prevEntries, journalEntry]);
    setJournalEntry({});
  };

  // Function to handle deleting a journal entry
  const handleDelete = (index) => {
    const newEntries = [...journalEntries];
    newEntries.splice(index, 1);
    setJournalEntries(newEntries);
  };


  return (
    
    <div>

<img src={creamLogo} alt="My Image" width="100" height="100"/>
<h1 style={{ textAlign: 'center', color: 'white' }}>Admin User List</h1>

  <div>       
      <h2>Create Account</h2>
      <button onClick={ViewUsers}>View Users</button>
      <h2>   </h2>
     <button onClick={ViewCHOA}>View Chart of Accounts</button>
      
<br/>
<br/>
              <form onSubmit={handleCreateAccount}>

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
          <br/>
          
          <br />
          <label htmlFor="category" >Account Category:</label>
          <input type="text" id="category" name="category" value={newAccount.category} onChange={handleChange} />

          <label htmlFor="subcategory">Account Subcategory:</label> 
          <input type="text" id="subcategory" name="subcategory" value={newAccount.subcategory} onChange={handleChange} />
          

          <label htmlFor="balance">Initial Balance:</label>           
          <input type="number" id="balance" name="balance" value={newAccount.balance} onChange={handleChange} />
          

          <label htmlFor="debit">Debit:</label>
          <input type="number" id="debit" name="debit" value={newAccount.debit} onChange={handleChange} />
          <br/>
          
          <br />

          <label htmlFor="credit">Credit:</label>
          <input type="number" id="credit" name="credit" value={newAccount.credit} onChange={handleChange} />
          
          
          <label htmlFor="date">Date Added:</label>
          <input type="date" id="date" name="date" value={newAccount.date} onChange={handleChange} />
          

          <label htmlFor="user">User ID:</label>
          <input type="text" id="user" name="user" value={newAccount.user} onChange={handleChange} />
          

          <label htmlFor="order">Order:</label>
          <input type="number" id="order" name="order" value={newAccount.order} onChange={handleChange} />
          <br/>
          
          <br />

          <label htmlFor="statement">Statement:</label>
          <input type="text" id="statement" name="statement" value={newAccount.statement} onChange={handleChange} />
          

          <label htmlFor="comment">Comment:</label>
          <input type="text" id="comment" name="comment" value={newAccount.comment} onChange={handleChange} />
          <br/>
          
          <br />

          <button type="submit" style={{
  margin: "0 auto",    // Center the button
  display: "block",   // Change display property to "block"
  padding: "5px",    // Add padding to the button
  backgroundColor: "orange", // Set background color
  color: "white",     // Set text color
  borderRadius: "5px", // Add border radius     // Remove border
  cursor: "pointer"   // Add cursor pointer
}}>
  Create
</button>       
</form>
{/* Render your web application */}



      </div>
      <div style={{background: 'linear-gradient(to right, #7439db, #C66FBC 48%, #F7944D)'}}>
        
        <h2>Account List</h2>
        <ul>
        {accounts.map(account => (
  <li key={account.id}>
    <a
  href="#"
  onClick={() => handleAccountClick(account.id)}
  style={{
    color: "white",     // Set text color
    textDecoration: "underline",  // Add underline
    cursor: "pointer"  // Add cursor pointer
  }}
>
  {account.name} ({account.number})
</a>

    {" - Balance: $" + account.balance}
    <br/>
    <br/>
    <button
  onClick={() => handleDeleteAccount(account.id)}
  style={{
    backgroundColor: "red",   // Set background color
    color: "white",           // Set text color
    padding: "10px",          // Add padding
    borderRadius: "5px",     // Add border radius
    border: "none",          // Remove border
    cursor: "pointer"        // Add cursor pointer
  }}
>
  Delete
</button>

  </li>
))}
        </ul>
      </div>

     
    
     
      {selectedAccount && (
  <div>
    <h2>Account Details</h2>
    <table className="account-table">
      <tbody>
        <tr>
          <td>Account Name:</td>
          <td>{selectedAccount.name}</td>
          <td>Account Number:</td>
          <td>{selectedAccount.number}</td>
          <td>Account Description:</td>
          </tr>
          <tr>

          <td>{selectedAccount.description}</td>
          <td>Normal Side:</td>
          <td>{selectedAccount.normalSide}</td>
        </tr>
       
        {/* Add more rows for other account information */}
      </tbody>
    </table>
  </div>
)}
    </div>
  );



      
   




  

  
          }

          
          export default AdminUser;
