import { useParams } from 'react-router-dom';
import formData from './formData';
import { Register } from './register';

export const RegisterJs = ({ type, edit, path, navigate }) => {
  const params = useParams();
  const podaci = formData(type, edit);

  const id = params.id ? params.id : '';
  const url = type === 'register' ? `users/register/${id}` : `/${type}/${id}`;

  let method = 'post';
  if (type === 'users' || type === 'register' || edit) method = 'patch';
  if (path === 'add') method = 'post';

  return (
    <Register
      url={url}
      pageNavigate={navigate || `/${type}`}
      value={'register'}
      podaci={podaci}
      type={type}
      method={method}
    />
  );
};
