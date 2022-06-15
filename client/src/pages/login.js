import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosBackend';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Spinner from '../components/Spinner';

export const Login = () => {
  let navigate = useNavigate();

  const [data, SetData] = useState({
    password: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post('/users/login', {
        email: data.email,
        password: data.password,
      })
      .then((res) => navigate('/users', { replace: true }))
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
      });
  };

  const newValue = (e) => SetData({ ...data, [e.target.name]: e.target.value });

  // console.log(error);
  console.log(data)

  if (loading) return <Spinner />;

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={Submit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          style={{ marginBottom: 10, width: 350 }}
          id='outlined-basic'
          type='email'
          name='email'
          label='E-mail'
          variant='outlined'
          onChange={newValue}
          required
        />
        <TextField
          style={{ marginBottom: 10 }}
          id='outlined-basic'
          type='password'
          name='password'
          label='Password'
          variant='outlined'
          onChange={newValue}
          required
        />
        {error && <p>{error}</p>}
        <Button
          style={{ padding: 15, marginBottom: 10 }}
          type='submit'
          variant='contained'
          color='primary'
        >
          Login
        </Button>
        <Button style={{ width: 200 }} size='small'>
          Zaboravili ste lozinku?
        </Button>
      </form>
    </div>
  );
};
