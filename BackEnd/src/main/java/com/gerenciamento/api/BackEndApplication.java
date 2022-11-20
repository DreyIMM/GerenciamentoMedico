package com.gerenciamento.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.gerenciamento.api.Models.Categoria;
import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Medico;
import com.gerenciamento.api.Service.MedicoService;
import com.gerenciamento.api.repository.CategoriaRepository;
import com.gerenciamento.api.repository.ClienteRepository;
import com.gerenciamento.api.repository.MedicoRepository;
import com.gerenciamento.api.repository.ConsultaRepository;

@SpringBootApplication
public class BackEndApplication implements CommandLineRunner{

	@Autowired
	private CategoriaRepository categoriarepository;
	
	@Autowired
	private ClienteRepository clienterepository;
	
	@Autowired
	private MedicoService medicoService;
	
	@Autowired
	private ConsultaRepository consultaRepository;
	
	   @Configuration
	    public class CorsConfiguration implements WebMvcConfigurer {

	        @Override
	        public void addCorsMappings(CorsRegistry registry) {
	            registry.addMapping("/**")
						.allowedOrigins("*")
	                	.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
	        }
	    }
	
	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		Categoria cat1 = new Categoria(null, "Unimed");
		Categoria cat2 = new Categoria(null, "Bradesco Seguros");

		Cliente p1 = new Cliente(null, "Admin", 159053948, 3213, "$2a$12$I0Ag1rk5SNxXSD/sCF5ti.13uQLwFnM8pNIctbyEJ4rkQCx9jB232", "ADMIN",cat1);
		Cliente p2 = new Cliente(null, "Auret", 23132, 9192, "$2a$12$I0Ag1rk5SNxXSD/sCF5ti.13uQLwFnM8pNIctbyEJ4rkQCx9jB232", "USER",cat2);
		Cliente p3 = new Cliente(null, "Thay", 32141,3432 , "$2a$12$I0Ag1rk5SNxXSD/sCF5ti.13uQLwFnM8pNIctbyEJ4rkQCx9jB232", "USER",cat1);
		Cliente p4 = new Cliente(null, "Andrey", 15905338, 3211, "$2a$12$I0Ag1rk5SNxXSD/sCF5ti.13uQLwFnM8pNIctbyEJ4rkQCx9jB232", "USER",cat1);

		categoriarepository.save(cat1);
		categoriarepository.save(cat2);
		
		clienterepository.save(p1);
		clienterepository.save(p2);
		clienterepository.save(p3);
		clienterepository.save(p4);

		
		Medico m1 = new Medico(3001L, "Dr Ruberval Mendes");
		Medico m2 = new Medico(3002L, "Dr Alan Carvalho");

		medicoService.save(m1);
		medicoService.save(m2);
		
	}

}
