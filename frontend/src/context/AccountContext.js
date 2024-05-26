import React, { createContext, useState, useEffect } from 'react';
import { getAccounts } from '../api/accountApi';

export const AccountContext = createContext();

const AccountProvider = ({ children }) => {
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
    <AccountContext.Provider value={{ accounts }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
