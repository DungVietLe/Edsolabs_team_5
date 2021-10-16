import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Typography from '@mui/material/Typography';
import { MyBoxForgot, MytagA } from './styles';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#fff',
  borderRadius: '20px',
};

export default function ForgotPassword() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MyBoxForgot>
      <MytagA onClick={handleOpen}>{t(messages.forgotps())}</MytagA>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            COMMING SOO..OOON !
          </Typography>
        </Box>
      </Modal>
    </MyBoxForgot>
  );
}
