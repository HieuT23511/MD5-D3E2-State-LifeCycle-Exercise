import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button} from "@mui/material";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function StudentTable({list,deleteClick,editClick}) {
    return (
        <TableContainer>
            <Table sx={{maxWidth: 800}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="center">Phone</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((student, index) => (
                        <StyledTableRow key={student.name}>
                            <StyledTableCell component="th" scope="row">
                                {student.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{student.phone}</StyledTableCell>
                            <StyledTableCell align="left">{student.email}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button variant="outlined" color="success" onClick={()=>editClick(index)}>Edit</Button>
                                <Button variant="outlined" color="error" onClick={() => deleteClick(index)}
                                    > Delete </Button>
                                    </StyledTableCell>
                                    </StyledTableRow>
                                    ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                        );
                    }