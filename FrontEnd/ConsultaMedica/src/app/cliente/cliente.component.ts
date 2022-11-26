import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { MatDialog } from '@angular/material/dialog'; 
import { DialogClienteComponent } from './dialogCliente/dialogCliente.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = []

  constructor(private clienteService: ClienteService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.listarClientes();
  }
  
  openDialog() {
    this.dialog.open(DialogClienteComponent, {
       width: '30%',
    }).afterClosed().subscribe(r=>{
      this.listarClientes();
    });
}

  listarClientes(){
    this.clienteService.listarClientes().subscribe(clientes =>{
      this.clientes = clientes
      console.log(this.clientes);
    }, err =>{
      console.log("não foi possivel listar os clientes", err)
    })
  }

}
