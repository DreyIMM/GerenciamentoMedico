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
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;


import com.fasterxml.jackson.annotation.JsonFormat;

@Table(name="consulta")
@Entity
public class Consulta implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	
	@NotNull
    @Column(name="HoraInicio", nullable=false)
	private String horaInicio;
	
	@NotNull
    @Column(name="data", nullable=false)
	private String data;
	
	@Column(name="status")
	private String status;
	
	@Column(name="laudo")
	private String laudo;
	
	@ManyToOne
	@JoinColumn(name = "medicoId", nullable = false)
	private Medico medico;
	
	@ManyToOne
	@JoinColumn(name ="pacienteId", nullable = false)
	private Cliente cliente;
	
	public Consulta() {}

	public Consulta(Long id, @NotNull String horaInicio, @NotNull String data, Medico medico, Cliente cliente) {
		Id = id;
		this.horaInicio = horaInicio;
		this.data = data;
		this.medico = medico;
		this.cliente = cliente;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getHoraInicio() {
		return horaInicio;
	}

	public void setHoraInicio(String horaInicio) {
		this.horaInicio = horaInicio;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getLaudo() {
		return laudo;
	}

	public void setLaudo(String laudo) {
		this.laudo = laudo;
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







	
}
