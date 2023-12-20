
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import './App.css';
import VerifiedIcon from '@mui/icons-material/Verified';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 292,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  p: 4,
  textAlign:'center'
};

function NewsAdded() {
  const [open, setOpen] = React.useState(true);
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
       <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" style={{paddingTop: "20px"}}>
            News Add Successfully <VerifiedIcon style={{position:"absolute", top:"20px", left:"46%", color:"#1aa13e", fontSize:"30px"}}/>
          </Typography>
        </Box>
      </Modal>
    </div>
    </div>
  );
}

export default NewsAdded;