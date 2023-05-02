import React, { useState } from 'react';
import JournalEntryForm from './JournalEntryForm';

function AccountingApp() {
  const [journalEntries, setJournalEntries] = useState([]);

  const handleAddEntry = (journalEntry) => {
    setJournalEntries([...journalEntries, journalEntry]);
  };

  const totalDebit = journalEntries.reduce((total, entry) => {
    return entry.amount > 0 ? total + entry.amount : total;
  }, 0);

  const totalCredit = journalEntries.reduce((total, entry) => {
    return entry.amount < 0 ? total - entry.amount : total;
  }, 0);

  return (
    <div>
      <h1>Accounting App</h1>
      <JournalEntryForm onSubmit={handleAddEntry} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Account Title</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {journalEntries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.accountTitle}</td>
              <td>{entry.amount > 0 ? entry.amount : ''}</td>
              <td>{entry.amount < 0 ? -entry.amount : ''}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td><strong>Total</strong></td>
            <td><strong>{totalDebit.toFixed(2)}</strong></td>
            <td><strong>{totalCredit.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AccountingApp;
