import React, { useState } from 'react';

const AccountForm = ({ onSubmit }) => {
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
        placeholder="Account Name"
      />
      <button type="submit">Add Account</button>
    </form>
  );
};

export default AccountForm;