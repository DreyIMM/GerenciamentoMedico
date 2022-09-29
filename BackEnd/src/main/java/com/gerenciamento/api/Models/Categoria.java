package com.gerenciamento.api.Models;

import java.util.Objects;

import javax.persistence.GeneratedValue;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Categoria  {
	
	private @Id @GeneratedValue Long Id;
	private String Nome;
	
	public Categoria() {}
	
	public Categoria(Long id, String nome) {
		Id = id;
		Nome = nome;
		
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
		Categoria other = (Categoria) obj;
		return Objects.equals(Id, other.Id);
	}
	
	
}
