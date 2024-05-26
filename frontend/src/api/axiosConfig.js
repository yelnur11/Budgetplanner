import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001/API',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;