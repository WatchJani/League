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
    {
      field: 'image',
      headerName: 'Avatar',
      editable: true,
      sortable: false,
      renderCell: (params) => (
        <img
          style={{ borderRadius: '50%', width: 40, height: 40 }}
          src={params.value}
        />
      ),
      width: 100,
    },
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
      field: 'adress',
      headerName: 'Adress',
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
        getRows(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const rows = [
  //   { id: 1, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "SuperAdmin" },
  //   { id: 2, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "SuperAdmin" },
  //   { id: 3, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "SuperAdmin" },
  //   { id: 4, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "SuperAdmin" },
  //   { id: 5, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "TeamAdmin" },
  //   { id: 6, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "TeamAdmin" },
  //   { id: 7, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "TeamAdmin" },
  //   { id: 8, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "TeamAdmin" },
  //   { id: 9, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "TeamAdmin" },
  //   { id: 10, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "LeagueAdmin" },
  //   { id: 11, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "LeagueAdmin" },
  //   { id: 12, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "LeagueAdmin" },
  //   { id: 13, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "LeagueAdmin" },
  //   { id: 14, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "Delegate" },
  //   { id: 15, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Kondić', firstName: 'Janko', email: "jankokondic84@gmail.com", phone: "066-311/063", adress: "Cara Lazara 654", role: "Delegate" },
  // ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ height: 'calc(100vh - 48px)', width: '1250px' }}>
          <DataGrid
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
