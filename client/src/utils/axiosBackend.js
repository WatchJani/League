import axios from 'axios';

const axiosBackend = axios.create({
  baseURL: process.env.NODE_ENV
    ? 'http://localhost:5000/api/v1/users'
    : 'https://league.savokos.com/api/v1/users',
});

export default axiosBackend;
