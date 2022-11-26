import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CategoriaComponent } from '../categoria.component';
import { CategoriaModel } from '../categoria.models';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-dialogcategoria',
  templateUrl: './dialogcategoria.component.html',
  styleUrls: ['./dialogCategoria.component.css']
})
export class DialogcategoriaComponent implements OnInit {

  constructor(private categoriaService:CategoriaService, private dialogRef: MatDialogRef<DialogcategoriaComponent>,@Inject(MAT_DIALOG_DATA)public data:CategoriaComponent) { }
  categoria: CategoriaModel= new CategoriaModel;
  categorias: Array<any> = new Array();
 

  // isEditar tem que ser um observable aqui
  isEditar = this.data;
  ngOnInit(): void {
    console.log(this.data)
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
      console.log('Error ao cadastrar a categoria', err)
    })
  }

  editarCategoria(categoria: CategoriaModel){
    console.log("a")
  }


  aoSalvarFechar(){
    let ref= document.getElementById('voltar');
    ref?.click()
  }
}