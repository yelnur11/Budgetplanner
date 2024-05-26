import React, { useEffect, useState } from 'react';
import { getBudgets } from '../../api/budgetApi';

const BudgetList = () => {
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
    <div>
      <h1>Budgets</h1>
      <ul>
        {budgets.map(budget => (
          <li key={budget.id}>{budget.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;
