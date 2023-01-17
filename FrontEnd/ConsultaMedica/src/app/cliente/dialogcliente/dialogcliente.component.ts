import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../cliente';
import { DialogclienteService } from './dialogcliente.service';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogcliente.component.html',
  styleUrls: ['./dialogcliente.component.css']
})
export class DialogclienteComponent implements OnInit {

  clienteForm !: FormGroup
  categorias: Array<any> = new Array();
  paciente: Cliente = new Cliente;
  actionBtn: string = 'Cadastrar';

  constructor(private formBuilder: FormBuilder, 
              private dialogRef: MatDialogRef<DialogclienteComponent>,
              @Inject(MAT_DIALOG_DATA) public editarCliente: any,
              private dialogClienteService : DialogclienteService) { }

  ngOnInit(): void {
    this.listarCategorias();
    this.clienteForm = this.formBuilder.group({
      id: [''],
      nome : ['', Validators.required],
      username : ['', Validators.required],
      numCarteirinha : ['', Validators.required],
      cpf : ['', Validators.required],
      password :['' ,Validators.required],
      role :['' ],
      categoria :['' ,Validators.required],
    });

    if(this.editarCliente){
        this.actionBtn = 'Editar';

        this.clienteForm.controls['username'].setValue(this.editarCliente.username);
        this.clienteForm.controls['nome'].setValue(this.editarCliente.nome);
        this.clienteForm.controls['numCarteirinha'].setValue(this.editarCliente.numCarteirinha);
        this.clienteForm.controls['password'].setValue(this.editarCliente.password);
        this.clienteForm.controls['role'].setValue(this.editarCliente.role);
        this.clienteForm.controls['categoria'].setValue(this.editarCliente.categoria.id);
        this.clienteForm.controls['cpf'].setValue(this.editarCliente.cpf)
    }
  }

  cliente(){
    if(!this.editarCliente){
      this.addCliente();
    }else{
      this.editCliente();
    }
  }

  addCliente(){    
      
      if(this.clienteForm.valid){

        this.paciente.username = this.clienteForm.value.username;
        this.paciente.nome = this.clienteForm.value.nome;
        this.paciente.numCarteirinha = this.clienteForm.value.numCarteirinha;
        this.paciente.password = this.clienteForm.value.password;
        this.paciente.role = "USER";
        this.paciente.categoria.id = this.clienteForm.value.categoria;
        this.paciente.cpf = this.clienteForm.value.cpf;
        console.log(this.paciente)

        this.dialogClienteService.cadastrarCliente(this.paciente).subscribe(() =>{
          this.dialogRef.close();
          this.clienteForm.reset();
        }, error =>{
          alert("Error ao salvar um cliente")
        }) 
      }
  }

  editCliente(){

    this.paciente.id = this.editarCliente.id;
    this.paciente.username = this.clienteForm.value.username;
    this.paciente.nome = this.clienteForm.value.nome;
    this.paciente.numCarteirinha = this.clienteForm.value.numCarteirinha;
    this.paciente.password = this.clienteForm.value.password;
    this.paciente.role = "USER";
    this.paciente.categoria.id = this.clienteForm.value.categoria;
    this.paciente.cpf = this.clienteForm.value.cpf

    this.dialogClienteService.editarCliente(this.paciente.id,this.paciente).subscribe(()=>{
      this.dialogRef.close()
      this.clienteForm.reset();
    }, err =>{
      alert("Erro ao atualizar o cliente "+err.message)
    });

  }

  listarCategorias(){
    this.dialogClienteService.listarCategorias().subscribe(categoria =>{
        this.categorias = categoria;
    }, err=>{
      console.log("Erro ao listar as categorias", err);
    })    
  }

}
