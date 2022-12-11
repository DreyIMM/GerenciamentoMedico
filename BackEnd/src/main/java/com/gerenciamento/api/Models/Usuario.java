package com.gerenciamento.api.Models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	@Column(unique=true)
	private String username;

	@NotNull
	private String password;
	
	@NotNull
	private String role;	
	
	@NotNull
	String nome;
	
	public Usuario() {}
	
	public Usuario(Long id, @NotNull String username, @NotNull String password, @NotNull String role,
				   @NotNull String nome) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
		this.nome = nome;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

} 	
