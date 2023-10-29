import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import SupplierService from '../services/SupplierService';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';

const AddSupplierComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [businessSocial, setBusinessSocial] = useState('')
    const [address, setAddress] = useState('')
    const history = useHistory();
    const {id} = useParams();
    const [errors, setErrors] = useState({});    

    const saveOrUpdateSupplier = (e) => {
        e.preventDefault();
        const errors = {};
        setErrors(errors);
        
        const supplier = {firstName, businessSocial, address}

        if(id){
            SupplierService.updateSupplier(id, supplier).then((response) => {
                history.push('/suppliers')
            }).catch(error => {
                console.log(error)
            })

        }else{
            SupplierService.createSupplier(supplier).then((response) =>{
                history.push('/suppliers');    
            }).catch(error => {
                setErrors({ auth: "The supplier exist with this name" })                
            })
        }
    }

    useEffect(() => {

        SupplierService.getSupplierById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setBusinessSocial(response.data.businessSocial)
            setAddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })

    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Supplier</h2>
        }else{
            return <h2 className = "text-center">Add Supplier</h2>
        }
    }

    return (
        <div>            
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Business Social :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter business social"
                                        name = "businessSocial"
                                        className = "form-control"
                                        value = {businessSocial}
                                        onChange = {(e) => setBusinessSocial(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address :</label>
                                    <input
                                        type = "address"
                                        placeholder = "Enter address"
                                        name = "address"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateSupplier(e)} >Submit </button>
                                <Link to="/suppliers" className="btn btn-danger"> Cancel </Link>
                            </form>

                            { errors.auth &&
                                <Container className="mt-5 mb-5">
                                    <Row>
                                        <Col sm="12" lg={{ span: 10, offset: 1 }}>
                                            <Card body>                        
                                            { errors.auth && <Alert variant="danger">{ errors.auth }</Alert> }
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            }
                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddSupplierComponent
