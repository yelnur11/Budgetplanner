import React from 'react';
import BudgetList from '../components/Budget/BudgetList';
import BudgetForm from '../components/Budget/BudgetForm';

const BudgetPage = () => {
  const handleAddBudget = (budget) => {
    console.log('Add budget:', budget);
  };

  return (
    <div>
      <h1>Budget Page</h1>
      <BudgetForm onSubmit={handleAddBudget} />
      <BudgetList />
    </div>
  );
};

export default BudgetPage;
