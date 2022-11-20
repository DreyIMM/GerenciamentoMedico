package com.gerenciamento.api.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.repository.ClienteRepository;

@Service
public class ClienteLogadoService  implements UserDetailsService {

	@Autowired
	ClienteRepository cliente;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Cliente user = cliente.findByUsername(username);

		if(user==null)
			throw new UsernameNotFoundException("Usuario inexistente");
		
		return new ClienteLogado(user);
	}
	
	
}
