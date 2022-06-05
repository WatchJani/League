import axios from 'axios';

const axiosBackend = axios.create({
  baseURL: process.env.NODE_ENV
    ? 'http://localhost:5000/api/v1/'
    : 'https://league.savokos.com/api/v1/',
});

export default axiosBackend;
