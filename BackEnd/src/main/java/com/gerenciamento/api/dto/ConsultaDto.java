package com.gerenciamento.api.dto;
import java.util.Date;
import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Medico;


public class ConsultaDto {


	private Date dataInicio;
	
	private Medico medico;
	
	private Cliente cliente;
	

	public Date getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(Date dataInicio) {
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
	
	

}
