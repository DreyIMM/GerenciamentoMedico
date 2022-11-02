import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from './categoria.models';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria: CategoriaModel= new CategoriaModel;
  categorias: Array<any> = new Array();

  constructor(private categoriaService: CategoriaService) { 
    
  }


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

  cadastrarCategoria(){
    this.categoriaService.CadastrarCategoria(this.categoria).subscribe(categoria =>{
    this.categoria = new CategoriaModel();
    this.listarCategorias();

    this.aoSalvarFechar();
    
      

    }, err =>{
      console.log('Error ao cadastrar o aluno', err)
    })
  }

  excluirCategoria(id: number){
    this.categoriaService.excluirCategoria(id).subscribe(categoria =>{
        this.listarCategorias();
    }, err=>{
        alert("categoria não excluida, verifique se existe clinte vinculado");
    })
  }

  atualizarCateogira(id:number){
    this.categoriaService.atualizarCategoria(id, this.categoria).subscribe(categoria =>{
      this.categoria = new CategoriaModel();
      this.listarCategorias();
      this.aoSalvarFechar();

    })
  }

  editarCategoria(categoria: CategoriaModel){
    
  }


  aoSalvarFechar(){
    let ref= document.getElementById('voltar');
    ref?.click()
  }

}
