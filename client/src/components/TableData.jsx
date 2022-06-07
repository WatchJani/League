import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from '../utils/axiosBackend';
import { useContext, useEffect, useState } from 'react';
import Spinner from './Spinner';
import {
  teamColumns,
  userColumns,
  seasonColumns,
  playerColumns,
  leagueColumns,
} from './columns';
import Modal from './Modal';
import { ModalContext } from '../context/modalContext';

const TableData = ({ type = 'users' }) => {
  const [error, setError] = useState(null);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const { modal, setModal } = useContext(ModalContext);

  const fetchRows = () => {
    setLoading(true);
    axios
      .get(`/${type}`)
      .then((res) => setRows(res.data.data))
      .catch((err) => setError(err.response.data.message))
      .finally(() => setLoading(false));
  };

  console.log(type);

  useEffect(() => {
    fetchRows();
  }, []);

  const navigate = useNavigate();

  const deleteData = () => {
    setLoading(true);
    axios
      .delete(`/${type}/${modal}`) // modal drzi id
      .then(() => {
        fetchRows();
        setModal(null);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setModal(null);
        setLoading(false);
      });
  };

  let columns = userColumns;

  switch (type) {
    case 'teams':
      columns = teamColumns;
      break;
    case 'seasons':
      columns = seasonColumns;
      break;
    case 'players':
      columns = playerColumns;
      break;
    case 'leagues':
      columns = leagueColumns;
      break;
  }

  const dataGrid = (
    <DataGrid
      style={{ overflowX: 'auto', padding: 20 }}
      getRowId={(row) => row._id}
      rows={rows}
      columns={columns}
      pageSize={12}
      rowsPerPageOptions={[12]}
    />
  );

  return (
    <>
      <Modal deleteData={deleteData} type={type} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
          }}
        >
          <Button
            style={{ width: 200, padding: 15 }}
            startIcon={<AddCircleIcon />}
            variant='contained'
            onClick={() => navigate('add')}
          >
            ADD
          </Button>
          <div
            style={{
              height: 'calc(100vh - 120px)',
              width: 1340,
              position: 'relative',
            }}
          >
            {error && <p>{error}</p>}
            {loading ? <Spinner /> : dataGrid}
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;