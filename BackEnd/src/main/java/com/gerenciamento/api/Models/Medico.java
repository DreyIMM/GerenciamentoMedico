package com.gerenciamento.api.Models;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Medico implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Long Crm;
	private String Nome;

	@NotNull
	@ManyToOne
 	@JoinColumn(name = "categoriaPlano_id")
	private Categoria Categoria;
	
	public Medico() {}
	
	public Medico(Long crm, String nome, Categoria categoria) {
		Crm =  crm;
		Nome = nome;
		Categoria = categoria;
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
	
	public Categoria getCategoria() {
		return Categoria;
	}

	public void setCategoria(Categoria categoria) {
		Categoria = categoria;
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
