import { useParams } from 'react-router-dom';
import formData from './formData';
import { Register } from './register';

export const RegisterJs = ({ type }) => {
  const params = useParams();
  const podaci = formData(type);

  const url = type === 'users' ? `/register/${params.id}` : `/${type}`;

  console.log(type);
  return (
    <Register
      url={url}
      pageNavigate={`/${type}`}
      value={'register'}
      podaci={podaci}
      type={type}
      method={type === 'users' ? 'patch' : 'post'}
    />
  );
};
