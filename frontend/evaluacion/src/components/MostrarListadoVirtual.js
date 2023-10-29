import React from 'react';
import { List } from 'react-virtualized';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete'; // Importa el ícono de eliminación de Material-UI
import { Link } from 'react-router-dom'; // Importa Link de React Router

const proveedores = [
  {
    "id": 2,
    "firstName": "Daniel Lazalde",
    "businessSocial": "Danny S.A de C.V",
    "address": "5 de mayo"
  },
  {
    "id": 3,
    "firstName": "Gustavo",
    "businessSocial": "Gus Sa de Cv",
    "address": "5 de febrero"
  },
  {
    "id": 6,
    "firstName": "martin",
    "businessSocial": "martin sa de cv",
    "address": "coronel"
  },
  {
    "id": 7,
    "firstName": "martin2",
    "businessSocial": "Piedra SA",
    "address": "5 de mayo 1300"
  }
];

const rowHeight = 50; // Altura de cada fila en píxeles

function mostrarListado2(suppliers, deleteSupplier) {
    const rowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <div>
        Nombre: {proveedores[index].firstName}
      </div>
      <div>
        Razón Social: {proveedores[index].businessSocial}
      </div>


      <TableContainer>
        <Table>
            <TableBody>
                    <TableRow key={proveedores[index].id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <TableCell>{proveedores[index].id}</TableCell>
                        <TableCell>{proveedores[index].firstName}</TableCell>
                        <TableCell>{proveedores[index].businessSocial}</TableCell>
                        <TableCell>{proveedores[index].address}</TableCell>                        
                    </TableRow>
                
            </TableBody>
        </Table>
    </TableContainer>

    </div>
  );

  return (
    <List
      width={1500} // Ancho de la lista
      height={900} // Altura de la lista
      rowCount={proveedores.length} // Número total de filas
      rowHeight={rowHeight} // Altura de cada fila
      rowRenderer={rowRenderer}
    />
  );
};

export default mostrarListado2;
