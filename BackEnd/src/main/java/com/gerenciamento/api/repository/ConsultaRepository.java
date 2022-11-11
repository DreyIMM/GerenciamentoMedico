package com.gerenciamento.api.repository;

import java.util.Date;
import java.util.Optional;

import javax.xml.crypto.Data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.gerenciamento.api.Models.Consulta;
import com.gerenciamento.api.Models.Medico;
import java.util.List;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
	
	public boolean existsByData(String data);
	public boolean existsByMedico(Medico medico);
	public boolean existsByHoraInicio(String horaInicio);

	 
}
