package com.gerenciamento.api.controller;


import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;



@RestController
public class AuthController {
	
	@GetMapping("/login")
	public void login() {
		
	}
	
	@GetMapping("/")
	public String home() {
		return "Home";
	}
	
}
