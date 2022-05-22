import axios from 'axios';

const axiosBackend = axios.create({
  baseURL: process.env.NODE_ENV
    ? 'http://localhost:5000/api/v1/auth'
    : 'https://savokos.com',
});

export default axiosBackend;
