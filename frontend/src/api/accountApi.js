import axios from './axiosConfig';

export const getAccounts = async () => {
  return await axios.get('/accounts');
};

export const getAccountById = async (id) => {
  return await axios.get(`/accounts/${id}`);
};

export const createAccount = async (accountData) => {
  return await axios.post('/accounts', accountData);
};

export const updateAccount = async (id, accountData) => {
  return await axios.put(`/accounts/${id}`, accountData);
};

export const deleteAccount = async (id) => {
  return await axios.delete(`/accounts/${id}`);
};