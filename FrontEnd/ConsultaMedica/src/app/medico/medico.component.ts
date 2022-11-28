import { Component, OnInit } from '@angular/core';
import { MedicoModel } from './medico.models';
import { MedicoService } from './medico.service';
import { MatDialog} from '@angular/material/dialog';
import { DialogMedicoComponent } from './dialogMedico/dialogMedico.component';
import { Subject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {



  medico: MedicoModel = new MedicoModel();
  medicos: Array<any> = new Array();
  isEditar:boolean=false;
  crm:number =10;
  dados:any;
  constructor(private medicoService: MedicoService,private dialog: MatDialog) {}


  ngOnInit(): void {
    this.listarMedicos();
  }

  openDialog(dados:any){
    this.dialog.open(DialogMedicoComponent, {
       width: '30%',
       data: dados
                // flag:this.isEditar
    }).afterClosed().subscribe(r=>{
      this.listarMedicos();
    });
  }
  
  
  listarMedicos(){
    this.medicoService.listarMedicos().subscribe(medicos =>{
        this.medicos = medicos;
    }, err=>{
      console.log("Erro ao listar os medicos", err);
    })
  }


  atualizarMedicos(id:number){
    this.medicoService.atualizarMedicos(id, this.medico).subscribe(medico =>{
      this.medico = new MedicoModel();
      this.listarMedicos();
      this.aoSalvarFechar();
    }, err =>{
      console.log('Error ao editar um médico', err)
    })

  }

  aoSalvarFechar(){
    let ref= document.getElementById('voltar');
    ref?.click()
  }


  excluirMedico(id: number){
    this.medicoService.excluirMedico(id).subscribe(medico =>{
        this.listarMedicos();
    }, err=>{
        alert("medico não excluida, verifique se existe clinte vinculado");
    })
  }


}
