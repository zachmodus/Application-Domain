import React, { useState, useEffect } from "react";

function ManagerUser(props) {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // fetch accounts from the server
    fetch("/accounts")
      .then((response) => response.json())
      .then((data) => setAccounts(data));
  }, []);

  return (
    <div style={{background: 'linear-gradient(to right, #7439db, #C66FBC 48%, #F7944D)'}}> 
      <h1>Accounts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.name}</td>
              <td>{account.email}</td>
              <td>{account.phone}</td>
              <td>{account.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManagerUser;
