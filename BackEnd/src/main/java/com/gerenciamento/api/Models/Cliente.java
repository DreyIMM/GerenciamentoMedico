package com.gerenciamento.api.Models;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Id;

@Entity
public class Cliente implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	private String Nome;
	private Long Cpf;
	private int NumCarteirinha;
	
	@ManyToOne
 	@JoinColumn(name = "categoriaPlano_id")
	private Categoria Categoria;
	
	public Cliente() { 	}
	
	
	
	public Cliente(Long id, String nome, Long cpf, int numCarteirinha, Categoria categoria) {
		Id = id;
		Nome = nome;
		Cpf = cpf;
		NumCarteirinha = numCarteirinha;
		Categoria = categoria;
	}
	
	
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getNome() {
		return Nome;
	}
	public void setNome(String nome) {
		Nome = nome;
	}
	public Long getCpf() {
		return Cpf;
	}
	public void setCpf(Long cpf) {
		Cpf = cpf;
	}
	public int getNumCarteirinha() {
		return NumCarteirinha;
	}
	public void setNumCarteirinha(int numCarteirinha) {
		NumCarteirinha = numCarteirinha;
	}
	public Categoria getCategoria() {
		return Categoria;
	}
	public void setCategoria(Categoria categoria) {
		Categoria = categoria;
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
