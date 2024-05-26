import React, { useState } from 'react';

const AlertForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Alert Message"
      />
      <button type="submit">Add Alert</button>
    </form>
  );
};

export default AlertForm;
