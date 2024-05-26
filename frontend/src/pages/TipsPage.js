import React from 'react';
import TipsList from '../components/Tips/TipsList';
import TipsForm from '../components/Tips/TipsForm';

const TipsPage = () => {
  const handleAddTip = (tip) => {
    console.log('Add tip:', tip);
  };

  return (
    <div>
      <h1>Tips Page</h1>
      <TipsForm onSubmit={handleAddTip} />
      <TipsList />
    </div>
  );
};

export default TipsPage;
