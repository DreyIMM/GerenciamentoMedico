package com.gerenciamento.api.Models;

import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Medico extends Usuario {

	@NotNull
	private Long Crm;
	
	@NotNull
	@ManyToOne
 	@JoinColumn(name = "categoriaPlano_id")
	private Categoria Categoria;
	
	public Medico() {}
	
	public Medico(Long id, String username, String password, String role,String nome, Long crm, Categoria categoria){
		super(id, username, password, role, nome);
		Crm =  crm;
		Categoria = categoria;
	}


	public Long getCrm() {
		return Crm;
	}

	public void setCrm(Long crm) {
		Crm = crm;
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
