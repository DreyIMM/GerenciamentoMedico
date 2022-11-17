package com.gerenciamento.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Service.ClienteService;
import com.gerenciamento.api.repository.ClienteRepository;

@RestController
public class ClienteController {
	
	@Autowired
	private final ClienteService _repository;
	
	public ClienteController(ClienteService repository) {
		_repository = repository;
	}
	
 
	@GetMapping("/clientes")
	public ResponseEntity<List<Cliente>> findAll(){
		List<Cliente> lista = _repository.todosPaciente();	
		return ResponseEntity.ok(lista);
	}
	
	
	@PostMapping("/cliente")
	Cliente novaCategoria(@RequestBody Cliente novoCliente) {
		return _repository.save(novoCliente);
	}
	
	
}
