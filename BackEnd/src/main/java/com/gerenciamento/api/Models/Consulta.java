package com.gerenciamento.api.Models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.gerenciamento.api.configs.DateConfig;

@Entity
public class Consulta implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	
	@NotNull
	@Temporal(TemporalType.TIME)
	@DateTimeFormat(style = "HH:mm")
	@JsonDeserialize(using = DateConfig.class)
    @Column(name="dataInicio", nullable=false, unique=true)
	private Date dataInicio;
	
	@ManyToOne
 	@JoinColumn(name = "medicoCrm", nullable = false)
	private Medico medico;
	
	@ManyToOne
	@JoinColumn(name ="pacienteId", nullable = false)
	private Cliente cliente;

	

	public Date getDataInicio() {
		return dataInicio;
	}


	public void Date(Date dataInicio) {
		this.dataInicio = dataInicio;
	}


	public Medico getMedico() {
		return medico;
	}


	public void setMedico(Medico medico) {
		this.medico = medico;
	}


	public Cliente getCliente() {
		return cliente;
	}


	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public Long getId() {
		return Id;
	}


	public void setId(Long id) {
		Id = id;
	}
	
	
	
		
	
	
}
