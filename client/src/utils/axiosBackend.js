import axios from 'axios';

const axiosBackend = axios.create({
  baseURL: process.env.NODE_ENV === "development"
    ? 'http://localhost:5000/api/v1/'
    : 'https://score-tracker-league.herokuapp.com/api/v1/',
});

export default axiosBackend;
