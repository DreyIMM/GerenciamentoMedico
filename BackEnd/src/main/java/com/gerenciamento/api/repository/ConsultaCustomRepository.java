package com.gerenciamento.api.repository;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.gerenciamento.api.Models.Consulta;

import java.util.Date;

@Repository
public class ConsultaCustomRepository {
	//deixar para caso seja necessario utilizar no futuro
	private final EntityManager em;
	
	public ConsultaCustomRepository(EntityManager em) {
		this.em = em;
	}
	
	
	public boolean horarioDisponivel(Long medico, Date data, Date horaInicio){

		return false;

	}
	
}
