package com.gerenciamento.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.gerenciamento.api.Models.Categoria;
import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.repository.CategoriaRepository;
import com.gerenciamento.api.repository.ClienteRepository;

@SpringBootApplication
public class BackEndApplication implements CommandLineRunner{

	@Autowired
	private CategoriaRepository categoriarepository;
	
	@Autowired
	private ClienteRepository clienterepository;
	
	
	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		Categoria cat1 = new Categoria(null, "Unimed");
		Categoria cat2 = new Categoria(null, "Bradesco Seguros");

		Cliente p1 = new Cliente(null, "Andrey", 159053948, 3213 ,cat1);
		Cliente p2 = new Cliente(null, "Auret", 23132, 9192,cat2);
		Cliente p3 = new Cliente(null, "Thay", 32141,3432 ,cat1);
		Cliente p4 = new Cliente(null, "Renato", 321341, 32132,cat2);
		
		categoriarepository.save(cat1);
		categoriarepository.save(cat2);
		
		clienterepository.save(p1);
		clienterepository.save(p2);
		clienterepository.save(p3);
		clienterepository.save(p4);
	}

}
