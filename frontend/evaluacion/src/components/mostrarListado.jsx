import React from 'react';
import '../css/mostrarListado.css';

import { Link } from 'react-router-dom'; // Importa Link de React Router

import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete'; // Importa el ícono de eliminación de Material-UI

function mostrarListado(suppliers, deleteSupplier) {
  return (

    
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow >
                    <TableCell className={'negritaEncabezado'} >ID</TableCell>
                    <TableCell className={'negritaEncabezado'}>First name</TableCell>
                    <TableCell className={'negritaEncabezado'}>Business social</TableCell>
                    <TableCell className={'negritaEncabezado'}>Address</TableCell>
                    <TableCell className={'negritaEncabezado'}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {suppliers && suppliers.map((supplier, index) =>(
                    <TableRow key={supplier.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <TableCell>{supplier.id}</TableCell>
                        <TableCell>{supplier.firstName}</TableCell>
                        <TableCell>{supplier.businessSocial}</TableCell>
                        <TableCell>{supplier.address}</TableCell>
                        <TableCell>
                        <Link to={`/edit-supplier/${supplier.id}`}>
                            <Edit />
                        </Link>
                            
                            <DeleteIcon onClick = {() => deleteSupplier(supplier.id)} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}

export default mostrarListado;