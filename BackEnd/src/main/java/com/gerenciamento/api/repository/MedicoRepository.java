package com.gerenciamento.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gerenciamento.api.Models.Medico;

@Repository
public interface MedicoRepository extends JpaRepository<Medico, Long> {
	
}
