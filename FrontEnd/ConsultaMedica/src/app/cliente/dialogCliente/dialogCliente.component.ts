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
     
        if(this.editdata.id > 0){
          this.action="Atualizar"
          this.clienteForm.controls['id'].setValue(this.editdata.id);
          this.clienteForm.controls['nome'].setValue(this.editdata.nome);
          this.clienteForm.controls['numCarteirinha'].setValue(this.editdata.numCarteirinha);
          this.clienteForm.controls['password'].setValue(this.editdata.password);
          this.clienteForm.controls['role'].setValue(this.editdata.role);
          this.clienteForm.controls['categoria'].setValue(this.editdata.categoria);
        }
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
        if(this.editdata.id == 0){
          this.cliente.id = this.clienteForm.value.id ;
          this.cliente.nome = this.clienteForm.value.nome;
          this.cliente.numCarteirinha = this.clienteForm.value.numCarteirinha;
          this.cliente.password = this.clienteForm.value.password;
          this.cliente.role = this.clienteForm.value.role;
          this.cliente.categoria = this.clienteForm.value.categoria;
          
    
          this.clienteService.CadastrarClientes(this.cliente).subscribe(cliente =>{
            this.cliente = new Cliente();
            this.listarClientes();
            this.clienteForm.reset();
            this.dialogRef.close();
            }, err =>{
              console.log('Error ao cadastrar um plano', err) 
            })
        
        }else{
          console.log('Error ao adicionar um cliente')
          /*
          this.cliente.id = this.clienteForm.value.id;
          this.cliente.nome = this.clienteForm.value.nome;
    
          this.clienteService.AtualizarClientes(this.cliente.id, this.cliente).subscribe(cliente =>{
            this.cliente = new Cliente();
            this.listarClientes();
            this.clienteForm.reset();
            this.dialogRef.close();
          }, err =>{
            console.log('Error ao editar um plano', err)
          })
    */
        }
      }



}
