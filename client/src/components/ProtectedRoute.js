import { useEffect, useState } from 'react';
import authHeader from '../utils/auth-header';
import axios from '../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [verified, setVerified] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/protected', { headers: authHeader() })
      .then((res) => {
        if (res?.data?.token) return setVerified(true);
      })
      .catch((err) => {
        navigate('/register', { replace: true });
      });
  }, []);

  return verified && children;
};

export default ProtectedRoute;
