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
import com.gerenciamento.api.repository.CategoriaRepository;

@RestController
public class CategoriaController {
	@Autowired
	private final CategoriaRepository _repository;
	
	public CategoriaController(CategoriaRepository repository) {
		_repository = repository;
	}
	
	@GetMapping("/categorias")
	public ResponseEntity<List<Categoria>> findAll(){
		List<Categoria> lista = _repository.findAll();	
		return ResponseEntity.ok(lista);
	}
	
	
	@PostMapping("/categoria")
	Categoria novaCategoria(@RequestBody Categoria novaCategoria) {
		return _repository.save(novaCategoria);
	}
	
	//Observse: cuidado que ao excluir um plano, pode ter clientes vinculados(Solução)
	@DeleteMapping("categoria/{id}")
	  void excluirCategoria(@PathVariable Long id) {
		_repository.deleteById(id);
		_repository.findAll();
	  }
	
	
}
