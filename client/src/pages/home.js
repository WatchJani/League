import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/navBar';
import { Link } from "react-router-dom";

export const Home = () => {
    let navigate = useNavigate();

    const logOut = () => {
        axios
            .get('http://localhost:5000/logout')
            .then((res) => {
                console.log(res)
                navigate('/', { replace: true });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <>
            <Navbar />
            <button onClick={logOut}>Logout</button>
            <Link to="/protected">protected</Link>
        </>
    )
}