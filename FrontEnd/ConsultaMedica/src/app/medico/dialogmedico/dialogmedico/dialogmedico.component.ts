import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DialogmedicoService } from './dialogmedico.service';
import { MedicoModel } from '../../medico.models';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogmedico',
  templateUrl: './dialogmedico.component.html',
  styleUrls: ['./dialogmedico.component.css']
})
export class DialogmedicoComponent implements OnInit {

  medicoForm !: FormGroup
  categorias: Array<any> = new Array();
  medico: MedicoModel = new MedicoModel;


  constructor(private DialogmedicoService: DialogmedicoService, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<DialogmedicoComponent>) { }

  ngOnInit(): void {
    this.listarCategorias()

    this.medicoForm = this.formBuilder.group({
      username : ['', Validators.required],
      nome : ['', Validators.required],
      password : ['', Validators.required],
      role :['' ,Validators.required],
      crm :['' ,Validators.required],
      categoria :['' ,Validators.required],
    })


  }

  addReserva(){
    this.medico.username = this.medicoForm.value.username;
    this.medico.password = this.medicoForm.value.password;
    this.medico.role = this.medicoForm.value.role;
    this.medico.crm = this.medicoForm.value.crm;
    this.medico.nome = this.medicoForm.value.nome;
    this.medico.categoria.id = this.medicoForm.value.categoria;

    console.log(this.medico);

    this.DialogmedicoService.CadastrarMedicos(this.medico).subscribe(med =>{
      this.dialogRef.close();
      this.medicoForm.reset();
    }, err =>{
      console.log("Error ao salvar", err)
    })

  }

  listarCategorias(){
    this.DialogmedicoService.listarCategorias().subscribe(categoria =>{
        this.categorias = categoria;
    }, err=>{
      console.log("Erro ao listar os medicos", err);
    })    
  }

}
