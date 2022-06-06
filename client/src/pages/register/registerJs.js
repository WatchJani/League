import { useParams } from 'react-router-dom';
import formData from './formData';
import { Register } from './register';

export const RegisterJs = ({ type, edit, path }) => {
  const params = useParams();
  const podaci = formData(type, edit);

  const url =
    type === 'register'
      ? `users/register/${params.id}`
      : `/${type}/${params.id}`;

  let method = 'post';
  if (type === 'users' || type === 'register') method = 'patch';
  if (path === 'add') method = 'post';

  return (
    <Register
      url={url}
      pageNavigate={type === 'register' ? '/users' : `/${type}`}
      value={'register'}
      podaci={podaci}
      type={type}
      method={method}
    />
  );
};
