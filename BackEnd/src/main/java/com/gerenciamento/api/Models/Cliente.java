package com.gerenciamento.api.Models;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.persistence.Id;

@Entity
public class Cliente implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	
	@NotNull
	@Column(unique=true)
	private String username;
	
	@NotNull
	@Column(unique=true)
	private int Cpf;
	
	@NotNull
	@Column(unique=true)
	private int Carteirinha;
	
	@NotNull
	private String password;
	
	@NotNull
	private String Role;	

	@NotNull
	@ManyToOne
 	@JoinColumn(name = "categoriaPlano_id")
	private Categoria Categoria;
	
	public Cliente() { 	}
	
	public Cliente(Long id, @NotNull String nome, @NotNull int cpf, @NotNull int carteirinha, @NotNull String senha,
			@NotNull String role, com.gerenciamento.api.Models.@NotNull Categoria categoria) {
		Id = id;
		username = nome;
		Cpf = cpf;
		Carteirinha = carteirinha;
		password = senha;
		Role = role;
		Categoria = categoria;
	}
	
	
	
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getNome() {
		return username;
	}
	public void setNome(String nome) {
		username = nome;
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public String getSenha() {
		return password;
	}

	public void setSenha(String senha) {
		password = senha;
	}
	
	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		return Objects.equals(Id, other.Id);
	} 
	
	
	
}
