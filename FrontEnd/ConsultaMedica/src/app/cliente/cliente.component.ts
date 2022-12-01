import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { MatDialog } from '@angular/material/dialog'; 
import { DialogClienteComponent } from './dialogCliente/dialogCliente.component';
import { CategoriaModel } from '../categoria/categoria.models';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente;
  clientes: Cliente[] = [];
  categorias: Array<CategoriaModel> = new Array();
  
  
  dados: any;

  constructor(private clienteService: ClienteService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.listarClientes();
    this.listarCategoria();
  }
  
  openDialog(dados:any) {
    this.dialog.open(DialogClienteComponent, {
       width: '30%',
       data:dados
    }).afterClosed().subscribe(r=>{
      this.listarClientes();
    });
}
CadastrarClientes(){
  console.log(this.cliente);
  this.clienteService.CadastrarClientes(this.cliente).subscribe(cliente =>{
  this.cliente = new Cliente();
  this.cliente.role = 'USER';
  this.listarClientes();
  this.aoSalvarFechar();
  }, err =>{
    console.log('Error ao cadastrar o cliente', err)
  })
}

  listarClientes(){
    this.clienteService.listarClientes().subscribe(clientes =>{
      this.clientes = clientes
      console.log(this.clientes);
    }, err =>{
      console.log("não foi possivel listar os clientes", err)
    })
  }
  aoSalvarFechar(){
    let ref= document.getElementById('voltar');
    ref?.click()
  }

  listarCategoria(){
    this.clienteService.listarCategorias().subscribe(categorias =>{
      this.categorias = categorias;
    }, err=>{
      console.log("Erro ao listar as categorias", err);
    })
  }

}
