package com.gerenciamento.api.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Usuario;
import com.gerenciamento.api.repository.ClienteRepository;
import com.gerenciamento.api.repository.UsuarioRepository;

@Service
public class ClienteLogadoService  implements UserDetailsService {

	@Autowired
	UsuarioRepository usuario;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Usuario user = usuario.findByUsername(username);

		if(user==null)
			throw new UsernameNotFoundException("Usuario inexistente");
		
		return new ClienteLogado(user);
	}
	
	
}
