import axios from '../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/navBar';
import { Link } from 'react-router-dom';

export const Home = () => {
  let navigate = useNavigate();

  const logOut = () => {
    axios
      .get('/logout')
      .then((res) => {
        console.log(res);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <button onClick={logOut}>Logout</button>
      <Link to='/protected'>protected</Link>
    </>
  );
};
