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
import com.gerenciamento.api.repository.ClienteRepository;

@RestController
@RequestMapping(value = "/cliente")
public class ClienteController {
	
	@Autowired
	private final ClienteRepository _repository;
	
	public ClienteController(ClienteRepository repository) {
		_repository = repository;
	}
	
	@GetMapping
	public ResponseEntity<List<Cliente>> findAll(){
		List<Cliente> lista = _repository.findAll();	
		return ResponseEntity.ok(lista);
	}
	
	
	@PostMapping
	Cliente novaCategoria(@RequestBody Cliente novoCliente) {
		return _repository.save(novoCliente);
	}
	
	
}
