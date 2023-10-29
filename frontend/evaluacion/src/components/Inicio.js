import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import SupplierService from '../services/SupplierService';
import BienvenidoContador from './BienvenidoContador';
import { Link } from 'react-router-dom'

export default function Inicio() {

    const [posts, setPosts] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [numberCandidate, setNumberCandidate] = useState([]);


    useEffect(() => {
        getAllSuppliers();
    }, []);

    const getAllSuppliers = () => {
         SupplierService.getAllSuppliers().then((response) => {
            console.log(response.data)
            setPosts(response.data);
            setFetching(false);

            //OBTENER EL NUMERO DE REGISTROS

            const numberOfRecords = Object.keys(response.data).length;
            setNumberCandidate(numberOfRecords);

        }).catch(error =>{
            //console.log(error);
            //setFetching(false);
        }) 
    }

    return (
        <div>            
            <div>
                
                <BienvenidoContador />

                <div className = "text-center"> 
                    <Jumbotron>
                    <h1>Welcome candidate {numberCandidate+1}</h1>
                </Jumbotron>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    
                    <br></br>                    
                    <Link to = "/suppliers" className = "btn btn-primary mb-2" > Continue </Link>                    
                </div>
            </div>
        </div>
    )
}
