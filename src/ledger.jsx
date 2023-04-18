import React from 'react';
import './ledger.css';

import AdminUser from './AdminUser';
function Ledger({ newAccount }) {

  const divStyles = {
    backgroundColor: 'lightgrey' // Change this to the desired background color
  };

  return (
<div style={divStyles}> {/* Apply inline styles to the div */}      <h2>New Account Information:</h2>
      <p>Account Name: {newAccount.accountName}</p>
      <p>Account Number: {newAccount.accountNumber}</p>
      <p>Account Description: {newAccount.accountDescription}</p>
      <p>Normal Side: {newAccount.normalSide}</p>
      <p>Account Category: {newAccount.accountCategory}</p>
      <p>Account Subcategory: {newAccount.accountSubcategory}</p>
      <p>Initial Balance: {newAccount.initialBalance}</p>
      <p>Debit: {newAccount.debit}</p>
      <p>Credit: {newAccount.credit}</p>
      <p>Balance: {newAccount.balance}</p>
      <p>Date Added: {newAccount.dateAdded}</p>
      <p>User ID: {newAccount.userId}</p>
      <p>Order: {newAccount.order}</p>
      <p>Statement: {newAccount.statement}</p>
      <p>Comment: {newAccount.comment}</p>
    </div>
  );
}

export default Ledger;
