package com.gerenciamento.api.controller;

import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;

import javax.validation.Valid;

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

import com.gerenciamento.api.Service.ConsultaService;
import com.gerenciamento.api.Service.MedicoService;
import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Consulta;
import com.gerenciamento.api.Models.Medico;
import com.gerenciamento.api.repository.MedicoRepository;


@RestController
public class ConsultaController {
	
	@Autowired
	private final ConsultaService _serviceConsulta;
	private final MedicoService _serviceMedico;
	
	public ConsultaController(ConsultaService consultaRepository, MedicoService  medicoService) {
		_serviceConsulta = consultaRepository;
		_serviceMedico = medicoService;
	}
	
	
	@PostMapping("/consultas")
	public ResponseEntity<Object> salvarConsulta(@RequestBody @Valid Consulta consulta){	
		
		if( !(_serviceMedico.existsByCrm(consulta.getMedico().getCrm())) ) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("CRM do médico não existe ");
		}

		if (_serviceConsulta.existsByData(consulta.getData()) && _serviceConsulta.existsByHoraInicio(consulta.getHoraInicio()) && _serviceConsulta.existsByMedico(consulta.getMedico()) ) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Médico indisponível nesse horario");
		};

		return ResponseEntity.status(HttpStatus.CREATED).body(_serviceConsulta.save(consulta));
	}
	
	
	
	@GetMapping("/consultas")
	public ResponseEntity<List<Consulta>> findAll(){
		List<Consulta> lista = _serviceConsulta.TodasConsultas();	
		return ResponseEntity.status(HttpStatus.CREATED).body(lista);
	}
	
	
	@GetMapping("/consultas/{id}")
	public ResponseEntity<List<Consulta>> findConsultasUmPaciente(@PathVariable Cliente id){
		
		List<Consulta> lista= _serviceConsulta.ConsultaPaciente(id);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(lista);
	}
	
	
	@GetMapping("consultas/{id}/{data}")
	public ResponseEntity<List<String>> findHorarioDisponivel(@PathVariable Medico id, @PathVariable String data ){
		
		List<String> lista = _serviceConsulta.findByHorarioFetchData(id, data);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(lista);
		
	}
	
	@DeleteMapping("consultas/{id}")
	void excluirConsulta(@PathVariable Long id) {
		_serviceConsulta.excluir(id);
	}
	
	
}
