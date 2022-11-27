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
  isEditar:boolean=false;

  constructor(private categoriaService: CategoriaService,  public dialog:MatDialog) {  }

  ngOnInit(): void {
    this.listarCategorias()
  }

    openDialog() {
      this.dialog.open(DialogcategoriaComponent, {
         width: '30%',
         data: this.isEditar
      }).afterClosed().subscribe(r=>{
        this.listarCategorias();
      });
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

  

}
