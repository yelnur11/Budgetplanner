import React from 'react';
import TransactionList from '../components/Transactions/TransactionList';
import TransactionForm from '../components/Transactions/TransactionForm';

const TransactionPage = () => {
  const handleAddTransaction = (transaction) => {
    console.log('Add transaction:', transaction);
  };

  return (
    <div>
      <h1>Transaction Page</h1>
      <TransactionForm onSubmit={handleAddTransaction} />
      <TransactionList />
    </div>
  );
};

export default TransactionPage;
