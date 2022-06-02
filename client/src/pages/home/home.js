import { useState, useEffect } from 'react';
import axios from '../../utils/axiosBackend';
import { HomeUI } from './homeui';

export const Home = () => {

  const [rows, getRows] = useState([]);

  useEffect(() => {
    axios
      .get('/')
      .then((res) => getRows(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomeUI rows={rows} columns={[
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'lastName', headerName: 'Last name', width: 130 },
      { field: 'email', headerName: 'E-mail', sortable: false, width: 220, },
      { field: 'phone', headerName: 'Phone', sortable: false, width: 120, },
      { field: 'address', headerName: 'Address', sortable: false, width: 160, },
      { field: 'role', headerName: 'Role', width: 130, }]} />
  );
};
