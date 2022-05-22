import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const cookie = Cookies.get('jwt');
  if (!cookie) {
    return <Navigate to='/register' replace />;
  }

  return children;
};

export default ProtectedRoute;
