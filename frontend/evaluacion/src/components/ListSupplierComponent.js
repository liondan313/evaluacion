import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import SupplierService from '../services/SupplierService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import mostrarListado from './mostrarListado';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListSupplierComponent = () => {

    const [suppliers, setSuppliers] = useState([])

    useEffect(() => {

        getAllSuppliers();
    }, [])

    const getAllSuppliers = () => {
        SupplierService.getAllSuppliers().then((response) => {
            setSuppliers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteSupplier = (supplierId) => {
       SupplierService.deleteSupplier(supplierId).then((response) =>{
        getAllSuppliers();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
              <div className="container mt-4">
              <FontAwesomeIcon icon={faCoffee} />

                <h1 className="text-left text-dark">List Suppliers</h1>

              </div>

              <div className="container mt-4">
                <h1 className="text-left text-dark">
                    <img
                    src="/ruta-de-la-imagen/imagen.png"                    
                    className="mr-2" // Agrega un margen a la derecha para separar la imagen del texto
                    />
                    <span className="text-primary">Administración</span>
                </h1>
                
                </div>
                
            <Link to = "/add-supplier" className = "btn btn-primary mb-2" > Add Supplier </Link>

            {mostrarListado(suppliers, deleteSupplier)}

            
        </div>
    )
}

export default ListSupplierComponent
