package com.evaluacion.lazalde.tema.repository;

import com.evaluacion.lazalde.tema.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
    // all crud database methods
    Supplier findByFirstName(String firstName);
}


