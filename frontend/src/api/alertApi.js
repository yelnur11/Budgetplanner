
import axios from './axiosConfig';

export const getAlerts = async () => {
  return await axios.get('/alerts');
};

export const getAlertById = async (id) => {
  return await axios.get(`/alerts/${id}`);
};

export const createAlert = async (alertData) => {
  return await axios.post('/alerts', alertData);
};

export const updateAlert = async (id, alertData) => {
  return await axios.put(`/alerts/${id}`, alertData);
};

export const deleteAlert = async (id) => {
  return await axios.delete(`/alerts/${id}`);
};