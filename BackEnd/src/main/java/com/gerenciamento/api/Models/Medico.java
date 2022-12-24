package com.gerenciamento.api.Models;

import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Medico extends Usuario {

	private static final long serialVersionUID = 1L;

	@NotNull
	private Long crm;
	
	@NotNull
	@ManyToOne
 	@JoinColumn(name = "categoriaPlano_id")
	private Categoria Categoria;
	
	public Medico() {}
	
	public Medico(Long id, String username, String password, String role,String nome, Long crm, Categoria categoria){
		super(id, username, password, role, nome);
		this.crm =  crm;
		Categoria = categoria;
	}


	public Long getCrm() {
		return crm;
	}

	public void setCrm(Long crm) {
		this.crm = crm;
	}
	
	public Categoria getCategoria() {
		return Categoria;
	}

	public void setCategoria(Categoria categoria) {
		Categoria = categoria;
	}


	@Override
	public int hashCode() {
		return Objects.hash(this.crm);
	}

	
	
}
