import axios from 'axios'

const SUPPLIER_BASE_REST_API_URL = 'http://localhost:8080/evaluacion/suppliers';

class SupplierService{

    getAllSuppliers(){
        return axios.get(SUPPLIER_BASE_REST_API_URL)
    }

    createSupplier(supplier){
        return axios.post(SUPPLIER_BASE_REST_API_URL, supplier)
    }

    getSupplierById(supplierId){
        return axios.get(SUPPLIER_BASE_REST_API_URL + '/' + supplierId);
    }

    updateSupplier(supplierId, supplier){
        return axios.put(SUPPLIER_BASE_REST_API_URL + '/' +supplierId, supplier);
    }

    deleteSupplier(supplierId){
        return axios.delete(SUPPLIER_BASE_REST_API_URL + '/' + supplierId);
    }
}

export default new SupplierService();