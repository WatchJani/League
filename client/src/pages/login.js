import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosBackend';

export const Login = () => {
  let navigate = useNavigate();

  const [data, SetData] = useState({
    password: '',
    email: '',
  });

  const [error, setError] = useState({});

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post('/login', {
        Email: data.email,
        Password: data.password,
      })
      .then((res) => {
        console.log(res);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  const newValue = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={Submit}>
      <input
        type='text'
        autoComplete='true'
        name='email'
        placeholder='e-mail'
        onChange={newValue}
      />
      {error.email}
      <input
        type='password'
        autoComplete='true'
        placeholder='password'
        name='password'
        onChange={newValue}
      />
      {error.password}
      <button type='submit'>Login</button>
    </form>
  );
};
