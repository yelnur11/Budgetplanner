import axios from './axiosConfig';

export const getTips = async () => {
  return await axios.get('/tips');
};

export const getTipById = async (id) => {
  return await axios.get(`/tips/${id}`);
};

export const createTip = async (tipData) => {
  return await axios.post('/tips', tipData);
};

export const updateTip = async (id, tipData) => {
  return await axios.put(`/tips/${id}`, tipData);
};

export const deleteTip = async (id) => {
  return await axios.delete(`/tips/${id}`);
};