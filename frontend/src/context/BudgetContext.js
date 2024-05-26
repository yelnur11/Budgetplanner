import React, { createContext, useState, useEffect } from 'react';
import { getBudgets } from '../api/budgetApi';

export const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const response = await getBudgets();
        setBudgets(response.data);
      } catch (error) {
        console.error('Error fetching budgets', error);
      }
    };

    fetchBudgets();
  }, []);

  return (
    <BudgetContext.Provider value={{ budgets }}>
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
