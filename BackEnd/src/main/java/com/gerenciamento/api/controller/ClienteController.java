package com.gerenciamento.api.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Medico;
import com.gerenciamento.api.Service.ClienteService;
import com.gerenciamento.api.repository.ClienteRepository;

@RestController
public class ClienteController {
	
	@Autowired
	private final ClienteService _service;
	
	public ClienteController(ClienteService repository) {
		_service = repository;
	}
	
 
	@GetMapping("/clientes")
	public ResponseEntity<List<Cliente>> findAll(){
		List<Cliente> lista = _service.todosPaciente();	
		return ResponseEntity.ok(lista);
	}
	
	
	@PostMapping("/cliente")
	Cliente novaCategoria(@RequestBody Cliente novoCliente) {
		return _service.execute(novoCliente);
	}
	
	@PutMapping("/cliente/{id}")
	ResponseEntity<Object> editarCliente(@PathVariable("id") Long id, @RequestBody Cliente clienteEditado ){
		
	   Optional<Cliente> cliente = _service.findById(id);
	   
		if(cliente.isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(_service.save(clienteEditado));
		}else{
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Cliente não encontrado");
		}		
	}
	
	@DeleteMapping("/cliente/{id}")
	void excluirMedico(@PathVariable Long id) {
		_service.excluir(id);
	}
	
	
}
