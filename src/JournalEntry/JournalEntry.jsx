import React, { useState, useEffect } from "react";
import { getAccounts } from "./firebasee";

function JournalEntry() {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      const accountsList = await getAccounts();
      setAccounts(accountsList);
    };
    fetchAccounts();
  }, []);

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  return (
    <div>
      <label htmlFor="account">Account:</label>
      <select id="account" onChange={handleAccountChange}>
        <option value="">Select an account</option>
        {accounts.map((account) => (
          <option key={account.id} value={account.name}>
            {account.number} - {account.name}
          </option>
        ))}
      </select>
      {selectedAccount && (
        <div>
          <p>Selected account: {selectedAccount}</p>
          {/* Add debit/credit inputs and submit button here */}
        </div>
      )}
    </div>
  );
}
export default JournalEntry;