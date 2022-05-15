import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  let navigate = useNavigate();

  const [data, SetData] = useState({
    username: null,
    password: null,
    email: null,
    phone: null,
  });

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/register', {
        Username: data.username,
        Password: data.password,
        Email: data.email,
        Phone: data.phone,
      })
      .then(() => {
        console.log('Successfully sent');
        navigate('/login', { replace: true });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const newValue = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={Submit}>
      <input
        type='text'
        placeholder='username'
        name='username'
        onChange={newValue}
      />
      <input
        type='password'
        autoComplete='true'
        placeholder='password'
        name='password'
        onChange={newValue}
      />
      <input
        type='text'
        autoComplete='true'
        name='email'
        placeholder='e-mail'
        onChange={newValue}
      />
      <input type='text' name='phone' placeholder='phone' onChange={newValue} />
      <button type='submit'>Register</button>
    </form>
  );
};
