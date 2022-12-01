import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaModel } from './categoria.models';
import { CategoriaService } from './categoria.service';
import { DialogcategoriaComponent } from './dialogCategoria/dialogCategoria.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {




  categoria: CategoriaModel= new CategoriaModel;
  categorias: Array<any> = new Array();
  
  id:number = 0;
  dados:any;

  constructor(private categoriaService: CategoriaService,  public dialog:MatDialog) {  }

  ngOnInit(): void {
    this.listarCategorias()
  }

    openDialog(dados:any) {
      this.dialog.open(DialogcategoriaComponent, {
         width: '30%',
         data: dados

      }).afterClosed().subscribe(r=>{
        this.listarCategorias();
      });
  }
  CadastrarCategorias(){
    console.log(this.categoria);
    this.categoriaService.CadastrarCategorias(this.categoria).subscribe(categoria =>{
    this.categoria = new CategoriaModel();
    this.listarCategorias();
    this.aoSalvarFechar();
    }, err =>{
      console.log('Error ao editar um plano', err)
    })
  }

  listarCategorias(){
    this.categoriaService.listarCategorias().subscribe(categorias =>{
      this.categorias = categorias
    }, err =>{
        console.log("erro ao listar as categorias", err);
    })
  }

  excluirCategoria(id: number){
    this.categoriaService.excluirCategoria(id).subscribe(categoria =>{
        this.listarCategorias();
    }, err=>{
        alert("categoria não excluida, verifique se existe clinte vinculado");
    })
  }

  aoSalvarFechar(){
    let ref= document.getElementById('voltar');
    ref?.click()
  }

  

}
