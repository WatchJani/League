import { useState } from 'react';
import axios from '../../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';
import Styled from "./register.module.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

axios.defaults.withCredentials = true;

export const Register = ({ podaci, value, pageNavigate, server }) => {
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

    // TODO ovako treba da izgleda
    // formData.append("name", data.name);
    // formData.append("image", data.selectedFile);

    // ne ovaj oblik vec ovaj gore 
    // let sendThisObejctToAxios = {};
    // podaci.forEach(prop => {
    //   sendThisObejctToAxios[prop.name] = data[prop.name]
    // });

    // podaci.forEach(atributtes => {
    //   formData.append(atributtes.name, "name")
    // });

    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    formData.append("password", data.password);
    formData.append("address", data.address);
    formData.append("phone", data.phone);
    formData.append("image", data.image);

    console.log(" ovo je formData ", formData)

    axios
      .post(server, formData)
      .then((res) => {
        console.log(res);
        navigate(pageNavigate, { replace: true });
      })
      .catch((err) => {
        setError(err.response.data.errors);
      });
  };

  const newValue = (e) => {
    if (e.target.name === "image") SetData({ ...data, [e.target.name]: e.target.files[0] });
    else SetData({ ...data, [e.target.name]: e.target.value });
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
