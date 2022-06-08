import { Link, Outlet } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from '../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  let navigate = useNavigate();

  const logOut = () => {
    axios
      .get('/users/logout')
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
      <nav>
        <Link to='/users'>Users</Link>
        <Link to='/teams'>Teams</Link>
        <Link to='/players'>Players</Link>
        <Link to='/leagues'>Leagues</Link>
        <Link to='/seasons'>Seasons</Link>
        <Link to='#' onClick={logOut}>
          Logout
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
