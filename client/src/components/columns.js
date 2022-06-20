import EditCell from './EditCell';

const imgSize = 40;

const defaultColumns = [
  { field: '_id', headerName: 'ID', width: 70 },
  {
    field: 'image',
    headerName: 'Avatar',
    editable: true,
    sortable: false,
    renderCell: (params) => (
      <img
        style={{ borderRadius: '50%', width: imgSize, height: imgSize, objectFit: "cover" }}
        src={params.value}
      />
    ),
    width: 100,
  },
  {
    field: 'edit',
    headerName: 'Edit',
    sortable: false,
    renderCell: (params) => <EditCell id={params.id} />,
    width: 105,
  },
];

export const userColumns = [
  ...defaultColumns,
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'E-mail', sortable: false, width: 220 },
  { field: 'phone', headerName: 'Phone', sortable: false, width: 120 },
  {
    field: 'address',
    headerName: 'Address',
    sortable: false,
    width: 160,
  },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'activation_hash', headerName: 'Activated', width: 130 },
];

export const teamColumns = [
  ...defaultColumns,
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'address',
    headerName: 'Address',
    sortable: false,
    width: 160,
  },
];

export const playerColumns = [
  ...defaultColumns,
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'height', headerName: 'Height', width: 220 },
  { field: 'weight', headerName: 'Weight', width: 120 },
];

export const seasonColumns = [
  ...defaultColumns,
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'number',
    headerName: 'Number',
    sortable: false,
    width: 160,
  },
  {
    field: 'actual',
    headerName: 'Actual',
    sortable: false,
    width: 160,
  },
  {
    field: 'locked',
    headerName: 'Locked',
    sortable: false,
    width: 160,
  },
];

export const leagueColumns = [
  ...defaultColumns,
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'address',
    headerName: 'Address',
    sortable: false,
    width: 160,
  },
];
