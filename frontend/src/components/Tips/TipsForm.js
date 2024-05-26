import React, { useState } from 'react';

const TipsForm = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Tip Content"
      />
      <button type="submit">Add Tip</button>
    </form>
  );
};

export default TipsForm;
