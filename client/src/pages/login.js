import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosBackend';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        navigate('/home', { replace: true });
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
    <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form onSubmit={Submit} style={{ display: "flex", flexDirection: "column" }}>
        <TextField style={{ marginBottom: 10, width: 350 }} id="outlined-basic" name='email' label="E-mail" variant="outlined" onChange={newValue} />
        {error.email}
        <TextField style={{ marginBottom: 10 }} id="outlined-basic" type='password' name='password' label="Password" variant="outlined" onChange={newValue} />
        {error.password}
        <Button style={{ padding: 15, marginBottom: 10 }} type='submit' variant="contained" color="primary">Login</Button>
        <Button style={{ width: 200 }} size="small">Zaboravili ste lozinku?</Button>
      </form>
    </div>
  );
};
