import axios from './axiosConfig';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post('/users/login', credentials);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Login failed');
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/users/register', userData);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Registration failed');
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to fetch users');
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`/users/${id}`);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to fetch user');
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`/users/${id}`, userData);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to update user');
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`/users/${id}`);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to delete user');
  }
};