import React, { createContext, useState, useEffect } from 'react';
import { getTransactions } from '../api/transactionApi';

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getTransactions();
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
