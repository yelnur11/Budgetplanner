import React from 'react';
import AlertList from '../components/Alerts/AlertList';
import AlertForm from '../components/Alerts/AlertForm';

const AlertPage = () => {
  const handleAddAlert = (alert) => {
    console.log('Add alert:', alert);
  };

  return (
    <div>
      <h1>Alert Page</h1>
      <AlertForm onSubmit={handleAddAlert} />
      <AlertList />
    </div>
  );
};

export default AlertPage;
