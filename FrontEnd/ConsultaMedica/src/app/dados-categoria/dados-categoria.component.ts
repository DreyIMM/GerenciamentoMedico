import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from './categoria.models';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-dados-categoria',
  templateUrl: './dados-categoria.component.html',
  styleUrls: ['./dados-categoria.component.css']
})
export class DadosCategoriaComponent implements OnInit {

  categoria: CategoriaModel= new CategoriaModel;
  constructor(private categoriaService: CategoriaService) { }

  cadastrarCategoria(){
      this.categoriaService.CadastrarCategoria(this.categoria).subscribe(categoria =>{
      this.categoria = new CategoriaModel();
      }, err =>{
        console.log('Error ao cadastrar o aluno', err)
      })
  }

  ngOnInit(): void {
  }

}
