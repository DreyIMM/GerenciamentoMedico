import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DialogmedicoService } from './dialogmedico.service';
import { MedicoModel } from '../../medico.models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaModel } from 'src/app/categoria/categoria.models';

@Component({
  selector: 'app-dialogmedico',
  templateUrl: './dialogmedico.component.html',
  styleUrls: ['./dialogmedico.component.css']
})
export class DialogmedicoComponent implements OnInit {

  medicoForm !: FormGroup
  medico: MedicoModel = new MedicoModel;
  categorias: CategoriaModel [] = [];
  actionBtn: string = 'Cadastrar';

  constructor(private DialogmedicoService: DialogmedicoService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editarMedico: any,
              private dialogRef: MatDialogRef<DialogmedicoComponent>) { }

  ngOnInit(): void {
    this.listarCategorias()

    this.medicoForm = this.formBuilder.group({
      id: [''],
      username : ['', Validators.required],
      nome : ['', Validators.required],
      password : ['', Validators.required],
      role :['' ],
      crm :['' ,Validators.required],
      categoria :[this.categorias,Validators.required],
    });

    if(this.editarMedico){
      this.actionBtn = 'Editar';

      this.medicoForm.controls['id'].setValue(this.editarMedico.id);
      this.medicoForm.controls['username'].setValue(this.editarMedico.username);
      this.medicoForm.controls['nome'].setValue(this.editarMedico.nome);
      this.medicoForm.controls['password'].setValue(this.editarMedico.password);
      this.medicoForm.controls['role'].setValue(this.editarMedico.role);
      this.medicoForm.controls['crm'].setValue(this.editarMedico.crm);
      this.medicoForm.controls['categoria'].setValue(this.editarMedico.categoria.id)
    }

  }

  Medico(){
      if(!this.editarMedico){
        this.addMedico();
      }else{
        this.atualizarMedico()
      } 
  }

  addMedico(){
    if(this.medicoForm.valid){
      this.medico.username = this.medicoForm.value.username;
      this.medico.password = this.medicoForm.value.password;
      this.medico.role = "MEDICO";
      this.medico.crm = this.medicoForm.value.crm;
      this.medico.nome = this.medicoForm.value.nome;
      this.medico.categoria.id = this.medicoForm.value.categoria;

      this.DialogmedicoService.CadastrarMedicos(this.medico).subscribe(med =>{
        this.dialogRef.close();
        this.medicoForm.reset();
      }, err =>{
        console.log("Error ao salvar", err)
      })
    }
  }

  atualizarMedico(){
        
        this.medico.id = this.medicoForm.value.id;
        this.medico.username = this.medicoForm.value.username;
        this.medico.password = this.medicoForm.value.password;
        this.medico.role = "MEDICO";
        this.medico.crm = this.medicoForm.value.crm;
        this.medico.nome = this.medicoForm.value.nome;
        this.medico.categoria.id = this.medicoForm.value.categoria;
        console.log(this.medico)
        this.DialogmedicoService.atualizarMedicos(this.medicoForm.value.id,this.medico).subscribe(()=>{
          this.dialogRef.close()
          this.medicoForm.reset();
        }, err =>{
          console.log("Error ao atualizar", err);
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
