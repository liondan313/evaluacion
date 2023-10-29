package com.evaluacion.lazalde.proveedores.repository;

import com.evaluacion.lazalde.proveedores.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
    // all crud database methods
    Supplier findByFirstName(String firstName);
}


