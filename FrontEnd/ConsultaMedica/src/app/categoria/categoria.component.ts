import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: Array<any> = new Array();

  constructor(private categoriaService: CategoriaService) { }


  ngOnInit(): void {
    this.listarCategorias()
  }

  listarCategorias(){
    this.categoriaService.listarCategorias().subscribe(categorias =>{
      this.categorias = categorias
    }, err =>{
        console.log("erro ao listar as categorias", err);
    })
  }

}
