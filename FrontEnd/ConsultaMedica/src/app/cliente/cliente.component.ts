import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = []

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();
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
