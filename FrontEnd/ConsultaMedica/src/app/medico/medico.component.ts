import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../categoria/categoria.models';
import { MedicoModel } from './medico.models';
import { MedicoService } from './medico.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogmedicoComponent } from './dialogmedico/dialogmedico/dialogmedico.component';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medico: MedicoModel = new MedicoModel();
  medicos: Array<any> = new Array();
  categorias: Array<CategoriaModel> = new Array();


  constructor(private dialog: MatDialog, private medicoService: MedicoService) {}

  ngOnInit(): void {
    this.listarMedicos();
  }
  
  openDialog() {
    this.dialog.open(DialogmedicoComponent, {
      width: '30%',
    }).afterClosed().subscribe(r=>{
      this.listarMedicos()
    });
    
  }


  listarMedicos(){
    this.medicoService.listarMedicos().subscribe(medicos =>{
        this.medicos = medicos;
    }, err=>{
      console.log("Erro ao listar os medicos", err);
    })
  }

}
