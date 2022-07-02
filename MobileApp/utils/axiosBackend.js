import axios from 'axios';

const axiosBackend = axios.create({
  baseURL: process.env.NODE_ENV
    ? 'http://localhost:5000/auth'
    : 'https://league.savokos.com/auth',
});

export default axiosBackend;
