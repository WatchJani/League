import { useState } from 'react';
import axios from '../../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';
import Styled from "./register.module.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

axios.defaults.withCredentials = true;

export const Register = ({ podaci, value, pageNavigate, server, method }) => {
  let navigate = useNavigate();

  let reactState = {};
  podaci.forEach(prop => {
    reactState[prop.name] = ''
  });

  const [data, SetData] = useState(reactState);

  const [error, setError] = useState({});

  const Submit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    podaci.forEach(atributtes => {
      formData.append(atributtes.name, data[atributtes.name])
    });


    //samo ljepse zapisati
    if (method === 'post') {
      axios
        .post(server, formData)
        .then((res) => {
          console.log(res);
          navigate(pageNavigate, { replace: true });
        })
        .catch((err) => {
          setError(err.response.data.errors);
        });
    }
    else {
      axios
        .patch(server, formData)
        .then((res) => {
          console.log(res);
          navigate(pageNavigate, { replace: true });
        })
        .catch((err) => {
          setError(err.response.data.errors);
        });
    }
  };

  console.log(data)

  const newValue = (e) => {
    if (e.target.name === "image") SetData({ ...data, [e.target.name]: e.target.files[0] });
    else SetData({ ...data, [e.target.name]: e.target.value });
  };


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
