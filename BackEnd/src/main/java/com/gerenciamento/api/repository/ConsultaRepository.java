package com.gerenciamento.api.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gerenciamento.api.Models.Cliente;
import com.gerenciamento.api.Models.Consulta;
import com.gerenciamento.api.Models.Medico;
import java.util.List;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
	
	public boolean existsByData(String data);
	public boolean existsByMedico(Medico medico);
	public boolean existsByHoraInicio(String horaInicio);
	
	@Query("SELECT u FROM Consulta u WHERE u.cliente = :id")
	List <Consulta> findByConsulta(@Param("id") Cliente id);
	
	@Query("SELECT u FROM Consulta u WHERE u.medico = :medicoId and u.data = :data")
	List <Consulta> findByHorarioFetchData(@Param("medicoId") Medico id, @Param("data") String data);

	 
}
