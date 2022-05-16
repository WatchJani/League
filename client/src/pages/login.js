import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    let navigate = useNavigate();


    const [data, SetData] = useState({
        password: null,
        email: null,
    });

    const Submit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:5000/login', {
                Email: data.email,
                Password: data.password,
            })
            .then((res) => {
                console.log(res);
                navigate('/home', { replace: true });
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
                autoComplete='true'
                name='email'
                placeholder='e-mail'
                onChange={newValue}
            />
            <input
                type='password'
                autoComplete='true'
                placeholder='password'
                name='password'
                onChange={newValue}
            />
            <button type='submit'>Login</button>
        </form>
    )
}