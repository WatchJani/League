import axios from 'axios';

const axiosBackend = axios.create({
  baseURL: process.env.NODE_ENV === "development"
    ? 'http://localhost:5000/api/v1/'
    : 'https://8080-d977dd38-fc04-4404-99ac-a8a5cc57d6ef.cs-europe-west1-onse.cloudshell.dev/api/v1/',
});

export default axiosBackend;
