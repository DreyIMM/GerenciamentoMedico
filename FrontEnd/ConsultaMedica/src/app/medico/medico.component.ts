import { Component, OnInit } from '@angular/core';
import { MedicoModel } from './medico.models';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medico: MedicoModel = new MedicoModel();
  medicos: Array<any> = new Array();

  constructor(private medicoService: MedicoService) {}

  ngOnInit(): void {
    this.listarMedicos();
  }

  listarMedicos(){
    this.medicoService.listarMedicos().subscribe(medicos =>{
        this.medicos = medicos;
    }, err=>{
      console.log("Erro ao listar os medicos", err);
    })
  }

  CadastrarMedicos(){
    this.medicoService.CadastrarMedicos(this.medico).subscribe(medico =>{
    this.medico = new MedicoModel();
    this.listarMedicos();
    this.aoSalvarFechar();
    }, err =>{
      console.log('Error ao cadastrar um medico', err)
    })
  }

  excluirMedico(id: number){
    this.medicoService.excluirMedico(id).subscribe(medico =>{
        this.listarMedicos();
    }, err=>{
        alert("medico não excluida, verifique se existe clinte vinculado");
    })
  }

  aoSalvarFechar(){
    let ref= document.getElementById('voltar');
    ref?.click()
  }

}
