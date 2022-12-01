import { Component, Inject, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MedicoModel} from '../medico.models';
import { MedicoComponent } from '../medico.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-dialogmedico',
  templateUrl: './dialogMedico.component.html',
  styleUrls: ['./dialogMedico.component.css']
})
export class DialogMedicoComponent implements OnInit {
  action:string = "Cadastrar"
  constructor(private medicoService:MedicoService, 
  private dialogRef: MatDialogRef<DialogMedicoComponent>,
  @Inject(MAT_DIALOG_DATA)public editdata:any,
  private formBuilder:FormBuilder
    ) { }

    
  medicos: Array<any> = new Array();
  medico: MedicoModel = new MedicoModel();
  medicoForm!:FormGroup;
  
  ngOnInit(): void {
    this.medicoForm = this.formBuilder.group({
      nome : ['', Validators.required],
      crm : ['', Validators.required]
    });
    console.log(this.editdata);
 
    if(this.editdata.crm > 0){
      this.action="Atualizar"
      this.medicoForm.controls['nome'].setValue(this.editdata.nome);
      this.medicoForm.controls['crm'].setValue(this.editdata.crm);
    }
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

  atualizarMedicos(id:number){
    this.medico.crm = this.medicoForm.value.crm ;
    this.medico.nome = this.medicoForm.value.nome;

    this.medicoService.atualizarMedicos(id, this.medico).subscribe(medico =>{
      this.medico = new MedicoModel();
      this.listarMedicos();
      this.aoSalvarFechar();
    }, err =>{
      console.log('Error ao editar um médico', err)
    })
  }

  CadastrarMedicos(){
    if(this.editdata.crm<0){
      this.medico.crm = this.medicoForm.value.crm ;
      this.medico.nome = this.medicoForm.value.nome;

      this.medicoService.CadastrarMedicos(this.medico).subscribe(medico =>{
        this.medico = new MedicoModel();
        this.listarMedicos();
        this.medicoForm.reset();
        this.dialogRef.close();
        }, err =>{
          console.log('Error ao cadastrar um medico', err) 
        })
    
    }else{
      
      this.medico.crm = this.medicoForm.value.crm ;
      this.medico.nome = this.medicoForm.value.nome;

      this.medicoService.atualizarMedicos(this.medico.crm, this.medico).subscribe(medico =>{
        this.medico = new MedicoModel();
        this.listarMedicos();
        this.medicoForm.reset();
        this.dialogRef.close();
      }, err =>{
        console.log('Error ao editar um médico', err)
      })

    }
    
  }
  
}