package com.gerenciamento.api.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Medico;
import com.gerenciamento.api.Service.ConsultaService;
import com.gerenciamento.api.dto.ConsultaDto;
import com.gerenciamento.api.Models.Consulta;
import com.gerenciamento.api.repository.ConsultaRepository;
import com.gerenciamento.api.repository.MedicoRepository;


@RestController
@RequestMapping(value = "/consulta")
public class ConsultaController {
	
	@Autowired
	private final ConsultaService _service;
	
	public ConsultaController(ConsultaService repository) {
		_service = repository;
	}
	
	
	@PostMapping
	public ResponseEntity<Object> salvarConsulta(@RequestBody @Valid Consulta consultadto){

		return ResponseEntity.status(HttpStatus.CREATED).body(_service.save(consultadto));
	}
	
	@GetMapping
	public ResponseEntity<List<Consulta>> findAll(){
		List<Consulta> lista = _service.TodasConsultas();	
		return ResponseEntity.status(HttpStatus.CREATED).body(lista);
	}
	
}
