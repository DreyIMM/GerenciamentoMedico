package com.gerenciamento.api.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.gerenciamento.api.Models.Consulta;
import com.gerenciamento.api.repository.ConsultaRepository;

@Service
public class ConsultaService {
	
	
	final ConsultaRepository consultaRepository;
	
	public ConsultaService(ConsultaRepository consultaRepository) {
		this.consultaRepository = consultaRepository;
	}

	@Transactional
	public Consulta save(Consulta consultaMedicaModels) {
		return consultaRepository.save(consultaMedicaModels);
	}

	public List<Consulta> TodasConsultas() {
		return consultaRepository.findAll();
	}
	
	
	
	
}
