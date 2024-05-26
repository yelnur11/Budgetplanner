import React from 'react';
import AuthProvider from './AuthContext';
import AccountProvider from './AccountContext';
import AlertProvider from './AlertContext';
import BudgetProvider from './BudgetContext';
import TransactionProvider from './TransactionContext';
import TipsProvider from './TipsContext';

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <AccountProvider>
        <AlertProvider>
          <BudgetProvider>
            <TransactionProvider>
              <TipsProvider>
                {children}
              </TipsProvider>
            </TransactionProvider>
          </BudgetProvider>
        </AlertProvider>
      </AccountProvider>
    </AuthProvider>
  );
};

export default AppProvider;
