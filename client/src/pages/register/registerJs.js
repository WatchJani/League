import { useParams } from 'react-router-dom';
import { Register } from './register';

export const RegisterJs = () => {
  const params = useParams();

  return (
    <Register
      server={`/register/${params.id}`}
      pageNavigate={'/home'}
      value={'register'}
      method={"patch"}
      podaci={[
        { id: 1, type: 'text', name: 'name', placeholder: 'name' },
        { id: 2, type: 'text', name: 'lastName', placeholder: 'last name' },
        { id: 3, type: 'password', name: 'password', placeholder: 'password' },
        { id: 4, type: 'text', name: 'address', placeholder: 'address' },
        { id: 5, type: 'text', name: 'phone', placeholder: 'phone' },
        { id: 6, type: 'file', name: 'image', placeholder: 'image' },
        //name se koristi za ime koje ce se primati na serveru
      ]}
    />
  );
};
