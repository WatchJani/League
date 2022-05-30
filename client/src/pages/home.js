// import { Navbar } from '../components/navBar';
// import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Home = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'image',
      headerName: 'Avatar',
      editable: true,
      sortable: false,
      renderCell: (params) => <img style={{ borderRadius: "50%", width: 40, height: 40 }} src={params.value} />, // renderCell will render the component
      width: 100
    },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'email',
      headerName: 'E-mail',
      description: 'Mejlovi korisnika',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      description: 'Mejlovi korisnika',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'adress',
      headerName: 'Adress',
      description: 'Mejlovi korisnika',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'role',
      headerName: 'role',
      description: 'Role svih korisnika na sistemu',
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      sortable: false,
      renderCell: (params) => <><IconButton aria-label="delete" style={{ color: "rgb(212, 0, 0)" }} size="large"><DeleteIcon /></IconButton><IconButton aria-label="delete" color="primary" size="large"><EditIcon /></IconButton></>,
      width: 105
    },
  ];

  const rows = [
    { id: 1, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Snow', firstName: 'Jon', age: 35, edit: null },
    { id: 2, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Lannister', firstName: 'Cersei', age: 42, edit: null },
    { id: 3, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Lannister', firstName: 'Jaime', age: 45, edit: null },
    { id: 4, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Stark', firstName: 'Arya', age: 16, edit: null },
    { id: 5, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Targaryen', firstName: 'Daenerys', age: null, edit: null },
    { id: 6, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Melisandre', firstName: null, age: 150, edit: null },
    { id: 7, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Clifford', firstName: 'Ferrara', age: 44, edit: null },
    { id: 8, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Snow', firstName: 'Jon', age: 35, edit: null },
    { id: 9, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Lannister', firstName: 'Cersei', age: 42, edit: null },
    { id: 10, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Lannister', firstName: 'Jaime', age: 45, edit: null },
    { id: 11, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Stark', firstName: 'Arya', age: 16, edit: null },
    { id: 12, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Targaryen', firstName: 'Daenerys', age: null, edit: null },
    { id: 13, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Melisandre', firstName: null, age: 150, edit: null },
    { id: 14, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Clifford', firstName: 'Ferrara', age: 44, edit: null },
    { id: 15, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Snow', firstName: 'Jon', age: 35, edit: null },
    { id: 16, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Lannister', firstName: 'Cersei', age: 42, edit: null },
    { id: 17, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Lannister', firstName: 'Jaime', age: 45, edit: null },
    { id: 18, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Stark', firstName: 'Arya', age: 16, edit: null },
    { id: 19, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Targaryen', firstName: 'Daenerys', age: null, edit: null },
    { id: 20, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Melisandre', firstName: null, age: 150, edit: null },
    { id: 21, image: 'https://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg', lastName: 'Clifford', firstName: 'Ferrara', age: 44, edit: null },

  ];


  return (
    <>
      <div style={{ display: "flex",  justifyContent: "center" }}>
        <div style={{ height: "calc(100vh - 48px)", width: "1250px" }}>
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
