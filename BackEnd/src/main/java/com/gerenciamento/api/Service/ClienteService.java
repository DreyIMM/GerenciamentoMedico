package com.gerenciamento.api.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Consulta;
import com.gerenciamento.api.Models.Medico;
import com.gerenciamento.api.repository.ClienteRepository;
import com.gerenciamento.api.repository.ConsultaRepository;
import com.gerenciamento.api.repository.MedicoRepository;

@Service
public class ClienteService {
	
	
	final ClienteRepository clienteRepository;
	
	public ClienteService(ClienteRepository clienteRepository) {
		this.clienteRepository = clienteRepository;
	}

	@Transactional
	public Cliente save(Cliente pacienteModel) {
		return clienteRepository.save(pacienteModel);
	}

	public List<Cliente> todosPaciente() {
		return clienteRepository.findAll();
	}
	
	public boolean existsByCrm(Long crm) {
		return clienteRepository.existsById(crm);
	}
	

	

	
	

}