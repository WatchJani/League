import { Outlet } from 'react-router-dom';
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
      <IconButton onClick={logOut} aria-label='delete' size='large'>
        <LogoutIcon />
      </IconButton>
      <Outlet />
    </>
  );
};
