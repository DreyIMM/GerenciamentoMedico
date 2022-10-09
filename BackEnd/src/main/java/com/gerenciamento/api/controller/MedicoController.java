package com.gerenciamento.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gerenciamento.api.Models.Categoria;
import com.gerenciamento.api.Models.Medico;
import com.gerenciamento.api.repository.CategoriaRepository;
import com.gerenciamento.api.repository.MedicoRepository;

@RestController
@RequestMapping(value = "/medico")
public class MedicoController {
	@Autowired
	private final MedicoRepository _repository;
	
	public MedicoController(MedicoRepository repository) {
		_repository = repository;
	}
	
	@GetMapping
	public ResponseEntity<List<Medico>> findAll(){
		List<Medico> lista = _repository.findAll();	
		return ResponseEntity.ok(lista);
	}
	
	
	@PostMapping
	Medico novoMedico(@RequestBody Medico novoMedico) {
		return _repository.save(novoMedico);
	}
	
}
