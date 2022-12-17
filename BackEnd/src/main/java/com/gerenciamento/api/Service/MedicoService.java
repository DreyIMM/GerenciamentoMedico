package com.gerenciamento.api.Service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;
import com.gerenciamento.api.Models.Medico;
import com.gerenciamento.api.repository.MedicoRepository;

@Service
public class MedicoService {
	
	
	final MedicoRepository medicoRepository;
	
	public MedicoService(MedicoRepository medicoRepositoryRepository) {
		this.medicoRepository = medicoRepositoryRepository;
	}

	@Transactional
	public Medico save(Medico medicoModel) {
		return medicoRepository.save(medicoModel);
	}

	public List<Medico> todosMedicos() {
		return medicoRepository.findAll();
	}

	public void excluir(Long id){
		 medicoRepository.deleteById(id);
	}
	
	public boolean existsByCrm(Long crm) {
		return medicoRepository.existsByCrm(crm);
	}
	
	public boolean existsById(Long id) {
		return medicoRepository.existsById(id);
	}



}