import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../categoria/categoria.models';
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
  categorias: Array<CategoriaModel> = new Array();


  constructor(private medicoService: MedicoService) {}

  ngOnInit(): void {
    this.listarMedicos();
    this.listarCategoria();
  }

  listarMedicos(){
    this.medicoService.listarMedicos().subscribe(medicos =>{
        this.medicos = medicos;
    }, err=>{
      console.log("Erro ao listar os medicos", err);
    })
  }

  CadastrarMedicos(){
    console.log(this.medico);
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

  listarCategoria(){
    this.medicoService.listarCategorias().subscribe(categorias =>{
      this.categorias = categorias;
    }, err=>{
      console.log("Erro ao listar as categorias", err);
    })
  }

  aoSalvarFechar(){
    let ref= document.getElementById('voltar');
    ref?.click()
  }

}
