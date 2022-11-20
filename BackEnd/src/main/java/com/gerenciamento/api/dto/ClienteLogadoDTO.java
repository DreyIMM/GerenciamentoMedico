package com.gerenciamento.api.dto;

public class ClienteLogadoDTO {
	
	public Long id;
	public String nome;
	public String username;
	public String role;
	
	public ClienteLogadoDTO() {}
	
	public ClienteLogadoDTO(Long id, String nome, String username, String role) {
		super();
		this.id = id;
		this.nome = nome;
		this.username = username;
		this.role = role;
	}
}
