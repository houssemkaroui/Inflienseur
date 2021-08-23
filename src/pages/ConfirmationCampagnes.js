import React, { useState,useEffect,useContext } from 'react';
import Paper from "@material-ui/core/Paper";
import TablePagination from '@material-ui/core/TablePagination';
// import IconButton from '@material-ui/core/IconButton';
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
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {ListeCompanie} from '../service/service'
import {AppContext} from "../components/contextapi"

import {ListeUser,UpdateEtat} from '../service/service'
import { Update } from '@material-ui/icons';

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

const columns2 = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'username', label: 'Username', display: '-webkit-box', align: 'left' },
  { id: 'tel', label: 'Phone', minWidth: 170, align: 'right', },
  { id: 'etat', label: 'Status', minWidth: 170, align: 'right', },
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
function ConfirmationCampagnes() {
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
  const [checked, SetChecked] = React.useState()
  const handleChange = (checked) => {
    // this.setState({ checked });
    SetChecked(checked)
  }
  const [key, setKey] = useState('Infliencuer');
  const [infliensuer,SetInflienceur] = React.useState([])
  const [vendeur,SetVendeur] = React.useState([])
  useEffect(() => { 
    listeUsers();
    setMessage(true)
  }, [])
  const listeUsers = () => {
    ListeUser().then((res) => {
      
      SetInflienceur(res.data.filter(element => element.roles[0].name =="ROLE_INFLUENCEUR")) 
      SetVendeur(res.data.filter(element => element.roles[0].name =="ROLE_VENDEUR")) 
    }).catch(e => {
    });
  }
 
 const handelItemCurrency = (row) => {
   row.etat = checked
   UpdateEtat(row,row.id).then((res) =>{
    listeUsers();
  })
};
  return (
    <div className='ConfirmationCampagnes' style={{ marginTop: 50 }}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Infliencuer" title="Infliencuer">
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
                      <StyledTableCell align="right"  onClick={() => handelItemCurrency(row, index)}>
                        <label>
                          <Switch onChange={handleChange} checked={row.etat} />
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
              rowsPerPage={rowsPerPage}
              page={page}
              count={infliensuer.length}

              onChangePage={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />

          </Paper>
        </Tab>
        <Tab eventKey="Venduer" title="Venduer">
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table  >
                <TableHead style={{ backgroundColor: 'cornflowerblue' }}>
                  <TableRow>
                    {columns2.map((column) => (
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
                    vendeur.map((row,index) =>(
                      <StyledTableRow >
                      <StyledTableCell component="th" scope="row">
                      {row.id}
                      </StyledTableCell>
                      <StyledTableCell>{row.email}</StyledTableCell>
                      <StyledTableCell >{row.username}</StyledTableCell>
                      <StyledTableCell align="right">{row.tel}</StyledTableCell>
                      <StyledTableCell align="right" onClick={() => handelItemCurrency(row, index)} >
                        <label>
                          <Switch onChange={handleChange} checked={row.etat} />
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
              count={vendeur.length}

              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />

          </Paper>
        </Tab>

      </Tabs>




    </div>
  );
}

export default ConfirmationCampagnes;
