package com.gerenciamento.api.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.xml.crypto.Data;

import com.gerenciamento.api.Models.Medico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Consulta;
import com.gerenciamento.api.repository.ConsultaRepository;

@Service
public class ConsultaService {
	
    @Autowired
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
	
	public List<Consulta> ConsultaPaciente(Cliente id){
		return consultaRepository.findByConsulta(id);
	}
	
	public boolean existsByData(String data){
		return consultaRepository.existsByData(data);
	}

	public boolean existsByMedico(Medico medico){
		return consultaRepository.existsByMedico(medico);
	}

	public boolean existsByHoraInicio(String horaInicio){
		return consultaRepository.existsByHoraInicio(horaInicio);
	}
	

}