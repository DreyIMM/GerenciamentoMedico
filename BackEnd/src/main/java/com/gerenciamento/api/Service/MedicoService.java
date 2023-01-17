package com.gerenciamento.api.Service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Medico;
import com.gerenciamento.api.repository.CustomClienteDetails;
import com.gerenciamento.api.repository.MedicoRepository;

@Service
public class MedicoService implements UserDetailsService {
	
	
	final MedicoRepository medicoRepository;
	
	public MedicoService(MedicoRepository medicoRepositoryRepository) {
		this.medicoRepository = medicoRepositoryRepository;
	}
	
	private BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	

	@Transactional
	public Medico save(Medico medicoModel) {
		return medicoRepository.save(medicoModel);
	}

	public List<Medico> todosMedicos() {
		return medicoRepository.findAll();
	}

	public void excluir(Long id){
		 medicoRepository.deleteById(id);
	}
	
	public boolean existsByCrm(Long crm) {
		return medicoRepository.existsByCrm(crm);
	}
	
	public boolean existsById(Long id) {
		return medicoRepository.existsById(id);
	}
	
	public Optional<Medico> findById(Long id) {
		return medicoRepository.findById(id);
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Medico medico = medicoRepository.findByUsername(username);
		if(medico == null) {
			throw new UsernameNotFoundException("Medico não localizado");
		}
		return new CustomClienteDetails(medico);
	}
	
	public Medico execute(Medico user) {
		
		Medico existsUser = medicoRepository.findByUsername(user.getNome());
		  if (existsUser != null) {
		      throw new RuntimeException("Usuário já existente!");
		  }

		  user.setPassword(passwordEncoder().encode(user.getPassword()));
		  user.setRole("USER");
		  Medico createdUser = medicoRepository.save(user);
		  return createdUser;
	  }

}