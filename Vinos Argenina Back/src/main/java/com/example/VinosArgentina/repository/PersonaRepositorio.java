
package com.example.VinosArgentina.repository;

import com.example.VinosArgentina.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepositorio  extends JpaRepository <Persona,Long>{
    
}
