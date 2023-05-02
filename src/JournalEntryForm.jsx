import React, { useState } from 'react';

function JournalEntryForm(props) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const journalEntry = { description, amount };
    props.onSubmit(journalEntry);
    setDescription('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default JournalEntryForm;
