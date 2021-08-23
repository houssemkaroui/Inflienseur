


import React,{useState,useEffect,useContext} from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Switch from "react-switch";
import Paper from "@material-ui/core/Paper";
import TablePagination from '@material-ui/core/TablePagination';
import {ListeUser} from '../service/service'
import {AppContext} from "../components/contextapi"


export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);
const columns = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'username', label: 'Username', display: '-webkit-box', align: 'left' },
    { id: 'photo', label: 'Phone', minWidth: 170, align: 'right', },
    { id: 'tel', label: 'Status', minWidth: 170, align: 'right', },
    { id: '', label: 'Actions', minWidth: 170, align: 'right', }
  ];
  
export const useStyles6 = makeStyles({
    root: {
        // width: '100%',
        overflow: 'hidden',
    },
    container: {
        maxHeight: 440,
    },
});
export const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            // backgroundColor: theme.palette.action.hover
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0
        }
    }
}))(TableRow);
function ListeInfluenceurs() {
  const [message, setMessage] = React.useContext(AppContext);

    const classes = useStyles6();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(event.target.value);
      setPage(0);
    };
    const [checked, SetChecked] = React.useState(false)
    const handleChange = (checked) => {
      // this.setState({ checked });
      SetChecked(checked)
    }
    const [infliensuer,SetInflienceur] = React.useState([])
    useEffect(() => { 
      listeUsers();
      setMessage(true)
    }, [])
    const listeUsers = () => {
      ListeUser().then((res) => {
        
        SetInflienceur(res.data.filter(element => element.roles[0].name =="ROLE_INFLUENCEUR")) 
      }).catch(e => {
      });
    }
    return (

        <div className='ListeInfluenceurs' style={{ marginTop: 50 }}>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table  >
                        <TableHead style={{ backgroundColor: 'cornflowerblue' }}>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                    infliensuer.map((row,index) =>(
                      <StyledTableRow >
                      <StyledTableCell component="th" scope="row">
                      {row.id}
                      </StyledTableCell>
                      <StyledTableCell>{row.email}</StyledTableCell>
                      <StyledTableCell >{row.username}</StyledTableCell>
                      <StyledTableCell align="right">{row.tel}</StyledTableCell>
                      <StyledTableCell align="right" >
                        <label>
                          <Switch  checked={row.etat} disabled="true" />
                        </label>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <VisibilityIcon color="primary" />
                        <CheckBoxIcon color="secondary" />
                      </StyledTableCell>
                    </StyledTableRow>

                    ))
                  }
                        </TableBody >
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={infliensuer.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </Paper>
        </div>

    )


}


export default ListeInfluenceurs;

