package com.gerenciamento.api.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Usuario;
import com.gerenciamento.api.dto.ClienteLogadoDTO;
import com.gerenciamento.api.repository.ClienteRepository;
import com.gerenciamento.api.repository.UsuarioRepository;



@RestController
@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	UsuarioRepository usuario;
	
	@PostMapping("/login")
	ClienteLogadoDTO efetuarLogin() {
			Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
			String currentPrincipalName = authentication.getName();
			Usuario cliAtual = usuario.findByUsername(currentPrincipalName);
			return new ClienteLogadoDTO(
					cliAtual.getId(), cliAtual.getNome(), cliAtual.getRole(), currentPrincipalName);
		
	}
	
}
