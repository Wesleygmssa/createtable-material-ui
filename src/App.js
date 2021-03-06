import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Container, TableContent } from "./styles";
import TablePagination from "@material-ui/core/TablePagination";

const useRowStyles = makeStyles({
  root: {},
});

function createData(registro, municipio, area, eixo, data, status) {
  return {
    registro,
    municipio,
    area,
    eixo,
    data,
    status,
  };
}

//dados fictícios
const rows = [
  createData(
    "2020.001.000155/RG",
    "Salvador",
    "COADE",
    "Fauna",
    "19/01/2021",
    "Vinculado"
  ),

  createData(
    "2020.001.000155/RG",
    "Salvador",
    "COADE",
    "Fauna",
    "19/01/2021",
    "Vinculado"
  ),
  createData(
    "2020.001.000155/RG",
    "Salvador",
    "COADE",
    "Fauna",
    "19/01/2021",
    "Vinculado"
  ),
];

//componente de linhas
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell>{row.registro}</TableCell>

        <TableCell align="right">{row.municipio}</TableCell>
        <TableCell align="right">{row.area}</TableCell>
        <TableCell align="right">{row.eixo}</TableCell>
        <TableCell align="right">{row.data}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <TableContent>Derramamento de óleo da pistate</TableContent>
        </Collapse>
      </TableCell>
    </React.Fragment>
  );
}

export default function App() {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableCell />
          <TableCell>Nº do Registro</TableCell>
          <TableCell align="right">Município</TableCell>
          <TableCell align="right">Área</TableCell>
          <TableCell align="right">Eixo Temático</TableCell>
          <TableCell align="right">Data do Registro</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={100}
        rowsPerPage={5}
        page={3}
        onChangePage={() => {}}
        onChangeRowsPerPage={() => {}}
      />
    </Container>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
