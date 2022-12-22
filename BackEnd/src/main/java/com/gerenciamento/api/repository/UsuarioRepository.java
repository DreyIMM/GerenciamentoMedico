package com.gerenciamento.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.gerenciamento.api.Models.Categoria;
import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	Usuario findByUsername(String username);

	
}
