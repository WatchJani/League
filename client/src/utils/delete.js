import { useNavigate } from 'react-router-dom';

function Delete() {
  let navigate = useNavigate();
  navigate(`edit/${params.id}`);

  return <></>;
}

export default Delete;
