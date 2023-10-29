package com.evaluacion.lazalde.proveedores.controller;

import com.evaluacion.lazalde.proveedores.exception.ResourceNotFoundException;
import com.evaluacion.lazalde.proveedores.model.Supplier;
import com.evaluacion.lazalde.proveedores.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/evaluacion/suppliers")
public class SupplierController {

    @Autowired
    private SupplierRepository SupplierRepository;

    @GetMapping
    public List<Supplier> getAllSuppliers(){
        return SupplierRepository.findAll();
    }

    // build create Supplier REST API
    @PostMapping
    public Supplier createSupplier(@RequestBody Supplier Supplier) {

        Supplier existingSupplier = SupplierRepository.findByFirstName(Supplier.getFirstName());

        if (existingSupplier != null) {
            // El proveedor ya existe en la base de datos
            String errorMessage = "Supplier exist with  name:" + Supplier.getFirstName();
            // Puedes lanzar una excepción, devolver un mensaje de error o manejarlo de otra manera, según tus necesidades.
            throw new RuntimeException(errorMessage);
        }

        return SupplierRepository.save(Supplier);
    }

    // build get Supplier by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Supplier> getSupplierById(@PathVariable  long id){
        Supplier Supplier = SupplierRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not exist with id:" + id));
        return ResponseEntity.ok(Supplier);
    }

    // build delete Supplier REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteSupplier(@PathVariable long id){

        Supplier Supplier = SupplierRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not exist with id: " + id));

        SupplierRepository.delete(Supplier);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
