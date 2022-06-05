import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { default as MuiModal } from '@mui/material/Modal';
import { ModalContext } from '../context/modalContext';
import { Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modal({ deleteData, type }) {
  const { modal, setModal } = React.useContext(ModalContext);

  return (
    <div>
      <MuiModal
        open={modal ? true : false}
        onClose={() => setModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Are you sure you want do delete this {type}?
          </Typography>
          <Stack
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            spacing={2}
          >
            <Button variant='contained' color='success' onClick={deleteData}>
              Yes
            </Button>
            <Button
              variant='contained'
              color='error'
              onClick={() => setModal(false)}
            >
              No
            </Button>
          </Stack>
        </Box>
      </MuiModal>
    </div>
  );
}
