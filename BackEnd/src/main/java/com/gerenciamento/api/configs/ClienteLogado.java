package com.gerenciamento.api.configs;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Usuario;

import org.springframework.security.core.authority.SimpleGrantedAuthority;


public class ClienteLogado implements UserDetails{
	private static final long serialVersionUID = 1L;

	private Usuario usuario ;
	
	public ClienteLogado(Usuario cli) {
		super();
		usuario = cli;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Collections.singleton(new SimpleGrantedAuthority(usuario.getRole()));
	}
	
	@Override
	public String getPassword() {
		return usuario.getPassword();
	}

	@Override
	public String getUsername() {
		return usuario.getNome();
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
