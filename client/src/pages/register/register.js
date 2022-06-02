import { useState } from 'react';
import axios from '../../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

axios.defaults.withCredentials = true;

export const Register = ({ podaci }) => {
  let navigate = useNavigate();

  let reactState = {};
  podaci.forEach(prop => {
    reactState[prop.name] = ''
  });

  const [data, SetData] = useState(
    reactState
  );

  const [error, setError] = useState({});

  const Submit = (e) => {
    e.preventDefault();

    let sendThisObejctToAxios = {};
    podaci.forEach(prop => {
      sendThisObejctToAxios[prop.name] = data[prop.name]
    });
    axios
      .post('/register',
        sendThisObejctToAxios
      )
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

  console.log(data)

  return (
    <form onSubmit={Submit}>
      {podaci.map((data) => {
        return (
          <div id={data.id}>
            <TextField label={data.label || data.name}
              type={data.type}
              placeholder={data.placeholder || data.name}
              name={data.name}
              onChange={newValue}
            />
            <p>{error[data.name]}</p>
          </div>
        )
      })}
      <button type='submit'>Register</button>
    </form>
  );
};

