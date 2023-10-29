import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import SupplierService from '../services/SupplierService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import mostrarListado from './mostrarListado';

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
            <h2 className = "text-center"> 
            
                <span className="text-muted">
                    <FontAwesomeIcon icon={faCoffee} />
                </span> 
                
              List Suppliers </h2>

            <Link to = "/add-supplier" className = "btn btn-primary mb-2" > Add Supplier </Link>

            {mostrarListado(suppliers, deleteSupplier)}

            
        </div>
    )
}

export default ListSupplierComponent
