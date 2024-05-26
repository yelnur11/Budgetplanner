import React, { useEffect, useState } from 'react';
import { getAccounts } from '../../api/accountApi';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await getAccounts();
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts', error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>{account.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
