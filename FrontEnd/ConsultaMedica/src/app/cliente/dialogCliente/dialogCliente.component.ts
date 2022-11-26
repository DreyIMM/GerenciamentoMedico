import { Component, Inject } from "@angular/core";
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
    constructor(
        private clienteService:ClienteService, 
        private dialogRef: MatDialogRef<DialogClienteComponent>,
        @Inject(MAT_DIALOG_DATA)public data:ClienteComponent
        ){ }
        
      clientes: Cliente[] = []
    

    listarClientes(){
        this.clienteService.listarClientes().subscribe(clientes =>{
          this.clientes = clientes
          console.log(this.clientes);
        }, err =>{
          console.log("não foi possivel listar os clientes", err)
        })
      }
}
