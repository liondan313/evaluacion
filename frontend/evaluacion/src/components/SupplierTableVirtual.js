import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'; // Importa el ícono de eliminación de Material-UI
import '../css/mostrarListado.css';

const SupplierTableVirtual = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Business Social</strong></TableCell>
              <TableCell><strong>Address</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.proveedores.slice(startIndex, endIndex).map((proveedor) => (
              <TableRow key={proveedor.id}>
                <TableCell>{proveedor.id}</TableCell>
                <TableCell>{proveedor.firstName}</TableCell>
                <TableCell>{proveedor.businessSocial}</TableCell>
                <TableCell>{proveedor.address}</TableCell>
                <TableCell>
                <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => props.deleteSupplier(proveedor.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={props.proveedores.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default SupplierTableVirtual;
