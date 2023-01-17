package com.gerenciamento.api.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Consulta;
import com.gerenciamento.api.Models.Medico;
import com.gerenciamento.api.repository.ClienteRepository;
import com.gerenciamento.api.repository.ConsultaRepository;
import com.gerenciamento.api.repository.CustomClienteDetails;
import com.gerenciamento.api.repository.MedicoRepository;

@Service
public class ClienteService implements UserDetailsService {
	
	
	final ClienteRepository clienteRepository;
	
	private BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
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
	
	public Optional<Cliente> findById(Long id) {
		return clienteRepository.findById(id);
	}
	
	public void excluir(Long id) {		
		clienteRepository.deleteById(id);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Cliente cliente = clienteRepository.findByUsername(username);
		if(cliente == null) {
			throw new UsernameNotFoundException("Usuario não localizado");
		}
		return new CustomClienteDetails(cliente);
	}
	
	public Cliente execute(Cliente user) {
		
		Cliente existsUser = clienteRepository.findByUsername(user.getNome());
		  if (existsUser != null) {
		      throw new RuntimeException("Usuário já existente!");
		  }

		  user.setPassword(passwordEncoder().encode(user.getPassword()));
		  Cliente createdUser = clienteRepository.save(user);
		  return createdUser;
	  }
	

	

	
	

}