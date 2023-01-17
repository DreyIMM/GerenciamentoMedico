import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { DialogclienteComponent } from './dialogcliente/dialogcliente.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = []

  constructor(private dialog: MatDialog,private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  openDialog() {
    this.dialog.open(DialogclienteComponent, {
      width: '30%',
    }).afterClosed().subscribe(r=>{
      this.listarClientes()
    });
    
  }

  editarCliente(row :any){
    this.dialog.open(DialogclienteComponent,{
      width: '30%',
      data: row
    }).afterClosed().subscribe(()=>{
      this.listarClientes()
    })
  }

  excluirCliente(id: number){
    this.clienteService.excluirCliente(id).subscribe(()=>{
      alert("Cliente excluido");
      this.listarClientes();
    }, error =>{
      console.log(error);
    })
  }


  listarClientes(){
    this.clienteService.listarClientes().subscribe(clientes =>{
      this.clientes = clientes
    }, err =>{
      console.log("não foi possivel listar os clientes", err)
    })
  }



}
