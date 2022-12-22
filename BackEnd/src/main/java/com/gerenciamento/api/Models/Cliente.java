package com.gerenciamento.api.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Cliente extends Usuario{	
	
	@NotNull
	@Column(unique=true)
	private int Cpf;
	
	@NotNull
	@Column(unique=true)
	private int Carteirinha;

	@NotNull
	@ManyToOne
 	@JoinColumn(name = "categoriaPlano_id")
	private Categoria Categoria;
	
	public Cliente() { 	}
	
	public Cliente(Long id, @NotNull String nome, @NotNull String username, @NotNull String password ,@NotNull int cpf, @NotNull int carteirinha,
				   String role, @NotNull Categoria categoria) {
		super(id, username, password, role, nome);
		Cpf = cpf;
		Carteirinha = carteirinha;
		Categoria = categoria;
	}
	
	public int getCpf() {
		return Cpf;
	}
	public void setCpf(int cpf) {
		Cpf = cpf;
	}
	public int getNumCarteirinha() {
		return Carteirinha;
	}
	public void setNumCarteirinha(int numCarteirinha) {
		Carteirinha = numCarteirinha;
	}
	public Categoria getCategoria() {
		return Categoria;
	}
	public void setCategoria(Categoria categoria) {
		Categoria = categoria;
	}

	public int getCarteirinha() {
		return Carteirinha;
	}

	public void setCarteirinha(int carteirinha) {
		Carteirinha = carteirinha;
	}	
	
}
