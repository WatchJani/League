import { useState } from 'react';
import axios from '../../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Styled from "./register.module.css"
import Button from '@mui/material/Button';

axios.defaults.withCredentials = true;

export const Register = ({ podaci, value, pageNavigate, server }) => {
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
      .post(server,
        sendThisObejctToAxios
      )
      .then((res) => {
        console.log(res);
        navigate(pageNavigate, { replace: true });
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
    <form className={Styled.form} onSubmit={Submit} >
      {podaci.map((data) => {
        return (
          <div key={data.id}>
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
      <Button style={{ padding: 15, marginBottom: 10, width: "100%", fontWeight: "bold" }} type='submit' variant="contained" color="primary">{value}</Button>
    </form>
  );
};
