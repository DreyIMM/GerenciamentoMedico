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

import com.gerenciamento.api.Models.Categoria;
import com.gerenciamento.api.repository.CategoriaRepository;

@RestController
@RequestMapping(value = "/categoria")
public class CategoriaController {
	@Autowired
	private final CategoriaRepository _repository;
	
	public CategoriaController(CategoriaRepository repository) {
		_repository = repository;
	}
	
	@GetMapping
	public ResponseEntity<List<Categoria>> findAll(){
		List<Categoria> lista = _repository.findAll();	
		return ResponseEntity.ok(lista);
	}
	
	
	@PostMapping
	Categoria novaCategoria(@RequestBody Categoria novaCategoria) {
		return _repository.save(novaCategoria);
	}
	
	
}
