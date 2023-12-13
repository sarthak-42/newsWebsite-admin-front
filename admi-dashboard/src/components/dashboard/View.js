import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import PortalHeader from '../shared/portalHeader';

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
                            <StyledTableCell><strong>Image</strong></StyledTableCell>
                            <StyledTableCell><strong>Video</strong></StyledTableCell>
                            <StyledTableCell><strong>Description</strong></StyledTableCell>
                            <StyledTableCell><strong>Edit</strong></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <StyledTableRow>
                            <StyledTableCell sx={{ maxWidth: 20 }} component="th" scope="row">1.</StyledTableCell>
                            <StyledTableCell>Abcd</StyledTableCell>
                            <StyledTableCell>Politics</StyledTableCell>
                            <StyledTableCell >
                                <img className='w-[45px]' src={"https://templates.envytheme.com/ostin/default/assets/img/client/client-1.jpg"} alt='' />
                            </StyledTableCell>
                            <StyledTableCell>Politics</StyledTableCell>
                            <StyledTableCell>Click here to add your own text and edit me.</StyledTableCell>
                            <StyledTableCell>
                                <IconButton  color="primary" aria-label="delete" size="medium">
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton color='error' aria-label="Edit" size="medium">
                                    <EditIcon />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            </PortalHeader>
        </>
    )
}

export default View;