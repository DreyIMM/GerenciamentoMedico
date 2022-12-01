import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Cliente } from "../cliente";
import { ClienteComponent } from "../cliente.component";
import { ClienteService } from "../cliente.service";
@Component({
    selector: 'app-dialogcliente',
    templateUrl: 'dialogCliente.component.html',
    styleUrls: ['dialogCliente.component.css']
  })


export class DialogClienteComponent {
  action:string = "Cadastrar"
    constructor(
        private clienteService:ClienteService, 
        private dialogRef: MatDialogRef<DialogClienteComponent>,
        @Inject(MAT_DIALOG_DATA)public editdata:any,
        private formBuilder:FormBuilder,
        ){ }
      cliente: Cliente = new Cliente;  
      clientes: Cliente[] = []
      clienteForm!: FormGroup;

      ngOnInit(): void {
        this.clienteForm = this.formBuilder.group({
          id: ['', Validators.required],
          nome: ['', Validators.required],
          numCarteirinha: ['', Validators.required],
          password: ['', Validators.required],
          role: ['', Validators.required],
          categoria: ['', Validators.required]
        });
        console.log(this.editdata);
      }
    

    listarClientes(){
        this.clienteService.listarClientes().subscribe(clientes =>{
          this.clientes = clientes
          console.log(this.clientes);
        }, err =>{
          console.log("não foi possivel listar os clientes", err)
        })
      }
      CadastrarClientes(){
        this.cliente.id = this.clienteForm.value.id ;
        this.cliente.nome = this.clienteForm.value.nome;
  
        this.clienteService.CadastrarClientes(this.cliente).subscribe(cliente =>{
          this.cliente= new Cliente();
          this.listarClientes();
          this.clienteForm.reset();
          this.dialogRef.close();
          }, err =>{
            console.log('Error ao cadastrar um cliente', err) 
          })
      }
      aoSalvarFechar(){
        let ref= document.getElementById('voltar');
        ref?.click()
      }



}
