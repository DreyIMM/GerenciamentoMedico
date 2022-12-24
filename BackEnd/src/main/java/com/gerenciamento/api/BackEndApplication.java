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
		
		
	}

}
