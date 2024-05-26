import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Transaction Description"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
