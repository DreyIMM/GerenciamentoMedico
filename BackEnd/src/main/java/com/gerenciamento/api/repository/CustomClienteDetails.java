package com.gerenciamento.api.repository;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.gerenciamento.api.Models.Cliente;

@Component
public class CustomClienteDetails implements UserDetails {

	private Cliente cliente;
	
	public CustomClienteDetails() {}
	
	public CustomClienteDetails(Cliente cliente) {
		super();
		this.cliente = cliente;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Collections.singleton(new SimpleGrantedAuthority(cliente.getRole()));
	}

	@Override
	public String getPassword() {
		return cliente.getSenha();
	}

	@Override
	public String getUsername() {
		return cliente.getNome();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
