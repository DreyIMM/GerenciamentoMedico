import { Component, Inject, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MedicoModel} from '../medico.models';
import { MedicoComponent } from '../medico.component';


@Component({
  selector: 'app-dialogmedico',
  templateUrl: './dialogMedico.component.html',
  styleUrls: ['./dialogMedico.component.css']
})
export class DialogMedicoComponent implements OnInit {

  constructor(private medicoService:MedicoService, private dialogRef: MatDialogRef<DialogMedicoComponent>,@Inject(MAT_DIALOG_DATA)public data:MedicoComponent) { }
  medicos: Array<any> = new Array();
  medico: MedicoModel = new MedicoModel();
  isEditar = this.data;
  ngOnInit(): void {
    
  }
  
  listarMedicos(){
    this.medicoService.listarMedicos().subscribe(medicos =>{
        this.medicos = medicos;
    }, err=>{
      console.log("Erro ao listar os medicos", err);
    })
  }

  aoSalvarFechar(){
    let ref= document.getElementById('voltar');
    ref?.click()
  }

  CadastrarMedicos(){
    this.medicoService.CadastrarMedicos(this.medico).subscribe(medico =>{
    this.medico = new MedicoModel();
    this.listarMedicos();
    this.aoSalvarFechar();
    }, err =>{
      console.log('Error ao cadastrar um medico', err)
    })
    console.log(this.medicos)
  }
  AtualizarMedicos(id:number){
    this.medicoService.atualizarMedicos(id, this.medico).subscribe(medico =>{
      this.medico = new MedicoModel();
      this.listarMedicos();
      this.aoSalvarFechar();
    }, err =>{
      console.log('Error ao editar um médico', err)
    })

  }
  
}