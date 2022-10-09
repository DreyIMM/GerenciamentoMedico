package com.gerenciamento.api.Models;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Medico implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Long Crm;
	private String Nome;
	
	public Medico() {}
	
	public Medico(Long crm, String nome) {
		Crm =  crm;
		Nome = nome;
		
	}


	public Long getCrm() {
		return Crm;
	}

	public void setCrm(Long crm) {
		Crm = crm;
	}

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Crm);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Medico other = (Medico) obj;
		return Objects.equals(Crm, other.Crm);
	}
	
	
}
