import * as React from 'react';
import { useState } from 'react';
// import { Typography } from '@mui/material';
// import { Box } from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
import PortalHeader from '../shared/portalHeader';
import SettingsIcon from '@mui/icons-material/Settings';
// import { CheckBoxOutlineBlank } from '@mui/icons-material';

const style = {
    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  boxShadow: 24,
  p: 4,
  width: '80%',
  maxWidth: 600,
  borderRadius: 8,
  textAlign: 'center'
  };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.action.hover,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.white,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const View = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleSettings = ()=>{
        setOpen(true)
    }


    return (
        <>
        <PortalHeader>
        
        <div className="Categories-form relative z-9 bg-white mx-auto grid rounded-[10px]">
            <TableContainer sx={{ maxWidth: 1100 }}>
                <Table aria-label="sticky table" className='w-100'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ maxWidth: 20 }}><strong>No.</strong></StyledTableCell>
                            <StyledTableCell><strong>Tittle</strong></StyledTableCell>
                            <StyledTableCell><strong>Categories</strong></StyledTableCell>
                            {/* <StyledTableCell><strong>Image</strong></StyledTableCell> */}
                            {/* <StyledTableCell><strong>Video</strong></StyledTableCell> */}
                            <StyledTableCell><strong>Description</strong></StyledTableCell>
                            <StyledTableCell><strong>Edit</strong></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <StyledTableRow>
                            <StyledTableCell sx={{ maxWidth: 20 }} component="th" scope="row">1.</StyledTableCell>
                            <StyledTableCell>Abcd</StyledTableCell>
                            <StyledTableCell>Politics</StyledTableCell>
                            {/* <StyledTableCell >
                                <img className='w-[45px]' src={"https://templates.envytheme.com/ostin/default/assets/img/client/client-1.jpg"} alt='' />
                            </StyledTableCell> */}
                            {/* <StyledTableCell>Politics</StyledTableCell> */}
                            <StyledTableCell>Click here to add your own text and edit me.</StyledTableCell>
                            <StyledTableCell>
                                <IconButton  color="primary" aria-label="delete" size="medium">
                                 <CheckCircleOutlineIcon/>  
                                </IconButton>
                                <IconButton color='error' aria-label="Edit" size="medium" onClick={handleSettings}>
                                    <SettingsIcon/>
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        {/* <Box sx={style}> */}
        <div className="Categories-form relative z-9 bg-white mx-auto grid rounded-[10px]" style={style}>
        <h1 className="uppercase">News</h1>
        <form
          action="/addNews"
          method="post"
          encType="multipart/form-data"
        //   onSubmit={handleSubmit}
        >
          <Grid className="mb-3" container spacing={2} md={8}>
            <Grid item md={6}>
        
                <label className="form-label">Title</label>

                <input
                  className="inpit_row form-input"
                  name="title"
                  type="text"
                //   value={formData.title}
                //   onChange={handleChange}
                  placeholder="Enter News Title"
                  
                    // setError(null);
              
                />
       
            </Grid>
            <Grid item md={6}>
            

               
              {/* <label className="form-label">Categories</label> */}
              {/* <input
                className="inpit_row form-input"
                name="category"
                placeholder="Enter News Category"
                value={formData.category}
                type="text"
                onChange={handleChange}
         
                
              /> */}
                 <label className="form-label">Categories</label>
                 <select
        id="default"
        className="input_row form-input"
        name="category"
        // value={formData.category}
        // onChange={handleChange}
    >
        <option value="" disabled>Select a category</option>
        {/* {categories.map((category) => (
            <option key={category} value={category}>
                {category}
            </option>
        ))} */}
    </select>
           
            </Grid>
            <Grid item md={6}>
          
                <label className="form-label">Image</label>

                <div className="relative">
                  <input
                    className="inpit_row form-input"
                    accept="image/"
                    multiple
                    type="file"
                    id="image-button"
                    // value={img}
                    name="img"
                    // onChange={handleChange}
                  />
                  {/* <input
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  /> */}
                  <label
                    htmlFor="image-button"
                    className="absolute left-[0] w-[100%] h-[100%] bg-white"
                  >
                    <Button
                      style={{ justifyContent: "left" }}
                      className="absolute left-[0] w-[100%] h-[100%] bg-white"
                      variant="raised"
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>
                </div>
        
            </Grid>

            <Grid item md={6}>
             

                
              <label className="form-label">Video</label>
              <div className="relative">
                {/* <input
                                    className="inpit_row form-input"
                                    accept="image/*"
                                    multiple
                                    type="file"
                                    id="image-button"
                                    />
                                    <label htmlFor="image-button" className="absolute left-[0] w-[100%] h-[100%] bg-white">
                                    <Button style={{ justifyContent: 'left' }} className="absolute left-[0] w-[100%] h-[100%] bg-white" variant="raised" component="span"  >
                                    Upload
                                    </Button>
                                </label> */}
                <input
                  className="inpit_row form-input"
                  name="videoUrl"
                  placeholder="Enter url Link"
                //   value={formData.videoUrl}
                  type="link"
                //   onChange={handleChange}
                />
              </div>
              {/* <iframe width="560" height="50" src="https://www.youtube.com/embed/FtJRfsJgtYI?si=DygKanIEDcg7zoNO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
       
            </Grid>
            <Grid item md={12}>
             
                <label className="form-label">Description</label>

                <textarea
                  className="inpit_row form-input"
                  name="desc"
                  style={{ height: "10rem" }}
                  placeholder="Enter Description"
                //   value={formData.desc}
                //   onChange={handleChange}
                />
            
            </Grid>
          </Grid>

          <button className="form-action w-60 " type="Submit">
            Add
          </button>
        </form>
        {/* </Box> */}
      </div>
      </Modal>
        </PortalHeader>
        </>
    )
}

export default View;