import React, { useState } from 'react';

const BudgetForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Budget Name"
      />
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default BudgetForm;
