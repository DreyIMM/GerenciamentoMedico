package com.gerenciamento.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gerenciamento.api.Models.Categoria;
import com.gerenciamento.api.Models.Medico;
import com.gerenciamento.api.Service.MedicoService;
import com.gerenciamento.api.repository.CategoriaRepository;
import com.gerenciamento.api.repository.MedicoRepository;

@RestController
@CrossOrigin("*")
public class MedicoController {
	@Autowired
	private final MedicoService _repository;
	
	public MedicoController(MedicoService repository) {
		_repository = repository;
	}
	
	@GetMapping("/medicos")
	public ResponseEntity<List<Medico>> findAll(){
		List<Medico> lista = _repository.todosMedicos();	
		return ResponseEntity.ok(lista);
	}

	@PostMapping("/medico")
	ResponseEntity<Object> novoMedico(@RequestBody Medico novoMedico) {
		if(_repository.existsByCrm(novoMedico.getCrm())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("CRM já vinculado á outro médico");
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(_repository.save(novoMedico));
	}

	@DeleteMapping("/medico/{id}")
	void excluirMedico(@PathVariable Long id) {
		_repository.excluir(id);
	}
	
}
