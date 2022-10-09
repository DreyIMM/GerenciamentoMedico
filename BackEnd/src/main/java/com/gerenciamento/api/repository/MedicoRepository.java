package com.gerenciamento.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.gerenciamento.api.Models.Medico;

public interface MedicoRepository extends JpaRepository<Medico, Long> {

}
