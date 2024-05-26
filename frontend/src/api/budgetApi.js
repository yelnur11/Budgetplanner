import axios from './axiosConfig';

export const getBudgets = async () => {
  return await axios.get('/budgets');
};

export const getBudgetById = async (id) => {
  return await axios.get(`/budgets/${id}`);
};

export const createBudget = async (budgetData) => {
  return await axios.post('/budgets', budgetData);
};

export const updateBudget = async (id, budgetData) => {
  return await axios.put(`/budgets/${id}`, budgetData);
};

export const deleteBudget = async (id) => {
  return await axios.delete(`/budgets/${id}`);
};