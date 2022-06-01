import { useState } from 'react';
import axios from '../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

export const Register = ({ podaci }) => {
  let navigate = useNavigate();

  let sendThisObejctToAxios={};
    podaci.forEach(prop => {
      sendThisObejctToAxios[prop.name]=''
    });

  const [data, SetData] = useState(
    // podaci.map(data => data.name) radi ali nema pocetnu vrijednost 
    sendThisObejctToAxios
  );

  const [error, setError] = useState({});

  const Submit = (e) => {
    e.preventDefault();

    let sendThisObejctToAxios={};
    podaci.forEach(prop => {
      sendThisObejctToAxios[prop.name]=data[prop.name]
    });
    axios
      .post('/register',
      // ! saljem obekat ovde;
      sendThisObejctToAxios
      //  podaci.map(data => data.name: data[data.name])// ne radi nikako
      // * username: data.username,
      // * password: data.password,
      // * email: data.email,
      // * phone: data.phone,
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

  console.log(data.password)

  return (
    <form onSubmit={Submit}>
      {podaci.map((data) => {
        return (
          <div id={data.id}>
            <input
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

