// import { Navbar } from '../components/navBar';
// import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import axios from '../utils/axiosBackend';

export const Home = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    // {
    //   field: 'image',
    //   headerName: 'Avatar',
    //   editable: true,
    //   sortable: false,
    //   renderCell: (params) => (
    //     <img
    //       style={{ borderRadius: '50%', width: 40, height: 40 }}
    //       src={params.value}
    //     />
    //   ),
    //   width: 100,
    // },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'email',
      headerName: 'E-mail',
      description: 'Mejlovi korisnika',
      sortable: false,
      width: 220,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      description: 'Mejlovi korisnika',
      sortable: false,
      width: 120,
    },
    {
      field: 'address',
      headerName: 'Address',
      description: 'Mejlovi korisnika',
      sortable: false,
      width: 160,
    },
    {
      field: 'role',
      headerName: 'role',
      description: 'Role svih korisnika na sistemu',
      width: 130,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label='delete'
            style={{ color: 'rgb(212, 0, 0)' }}
            size='large'
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label='delete' color='primary' size='large'>
            <EditIcon />
          </IconButton>
        </>
      ),
      width: 105,
    },
  ];

  const [rows, getRows] = useState([]);

  useEffect(() => {
    axios
      .get('/')
      .then((res) => {
        console.log(res.data.data)
        getRows(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ height: 'calc(100vh - 48px)', width: '1250px' }}>
          <DataGrid
            getRowId={(row) => row._id}
            rows={rows}
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[12]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
};
