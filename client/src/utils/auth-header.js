import Cookies from 'js-cookie';

const authHeader = () => {
  const jwt = Cookies.get('jwt');
  if (jwt) return { Authorization: 'Bearer ' + jwt };
  return {};
};
export default authHeader;
