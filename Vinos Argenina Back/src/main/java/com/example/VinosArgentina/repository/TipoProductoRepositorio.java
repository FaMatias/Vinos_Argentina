package com.example.VinosArgentina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.VinosArgentina.model.TipoProducto;

@Repository
public interface TipoProductoRepositorio extends JpaRepository<TipoProducto, Long>{

    Boolean existsByDescripcion(String description);
}
