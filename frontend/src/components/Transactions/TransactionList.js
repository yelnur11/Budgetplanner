import React, { useEffect, useState } from 'react';
import { getTransactions } from '../../api/transactionApi';

const TransactionList = () => {
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
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>{transaction.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
