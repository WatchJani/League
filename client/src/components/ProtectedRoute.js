import { useEffect, useState } from 'react';
import authHeader from '../utils/auth-header';
import axios from '../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [verified, setVerified] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/users/protected', { headers: authHeader() })
      .then((res) => {
        console.log(res);
        if (res?.data?.token) return setVerified(true);
      })
      .catch((err) => {
        navigate('/', { replace: true });
      });
  }, [navigate]);

  return verified && children;
};

export default ProtectedRoute;
