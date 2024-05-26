import React from 'react';
import AccountList from '../components/Accounts/AccountList';
import AccountForm from '../components/Accounts/AccountForm';

const AccountPage = () => {
  const handleAddAccount = (account) => {
    console.log('Add account:', account);
  };

  return (
    <div>
      <h1>Account Page</h1>
      <AccountForm onSubmit={handleAddAccount} />
      <AccountList />
    </div>
  );
};

export default AccountPage;
