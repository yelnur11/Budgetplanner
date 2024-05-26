import axios from './axiosConfig';

export const getTransactions = async () => {
  return await axios.get('/transactions');
};

export const getTransactionById = async (id) => {
  return await axios.get(`/transactions/${id}`);
};

export const createTransaction = async (transactionData) => {
  return await axios.post('/transactions', transactionData);
};

export const updateTransaction = async (id, transactionData) => {
  return await axios.put(`/transactions/${id}`, transactionData);
};

export const deleteTransaction = async (id) => {
  return await axios.delete(`/transactions/${id}`);
};