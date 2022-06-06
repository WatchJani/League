import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from 'react';
import { ModalContext } from '../context/modalContext';

function EditCell({ id }) {
  const navigate = useNavigate();
  const btnIconColor = 'rgb(212, 0, 0)';
  const { modal, setModal } = useContext(ModalContext);

  return (
    <>
      <IconButton
        aria-label='delete'
        style={{ color: btnIconColor }}
        size='large'
        onClick={() => setModal(id)}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        aria-label='delete'
        color='primary'
        size='large'
        onClick={() => navigate(`edit/${id}`)}
      >
        <EditIcon />
      </IconButton>
    </>
  );
}

export default EditCell;
