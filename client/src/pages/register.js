import { useState } from 'react';
import axios from '../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

export const Register = (props) => {
  let navigate = useNavigate();

  const [data, SetData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });

  const [error, setError] = useState({});

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post('/register', {
        Username: data.username,
        Password: data.password,
        Email: data.email,
        Phone: data.phone,
      })
      .then((res) => {
        console.log(res);
        navigate('/login', { replace: true });
      })
      .catch((err) => {
        setError(err.response.data.errors);
      });
  };

  const newValue = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
  };
  // console.log(props)
  return (
    <form onSubmit={Submit}>
      { (typeof props.username !== 'undefined')?(<input
        type='text'
        placeholder='username'
        name='username'
        onChange={newValue}
      />):''} 
      {error.username}
      {(typeof props.password !== 'undefined')?(<input
        type='password'
        autoComplete='true'
        placeholder='password'
        name='password'
        onChange={newValue}
      />):''}
      {error.password}
      
      {(typeof props.email !== 'undefined')?(<input
        type='text'
        autoComplete='true'
        name='email'
        placeholder='e-mail'
        onChange={newValue}
      />):''}
      {error.email}
      <input type='text' name='phone' placeholder='phone' onChange={newValue} />
      <button type='submit'>Register</button>
    </form>
  );
};
