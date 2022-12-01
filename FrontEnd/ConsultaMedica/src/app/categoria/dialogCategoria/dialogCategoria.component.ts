import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CategoriaComponent } from '../categoria.component';
import { CategoriaModel } from '../categoria.models';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-dialogcategoria',
  templateUrl: './dialogCategoria.component.html',
  styleUrls: ['./dialogCategoria.component.css']
})


export class DialogcategoriaComponent implements OnInit {
  action:string = "Cadastrar"
  constructor(
      private categoriaService:CategoriaService, 
      private dialogRef: MatDialogRef<DialogcategoriaComponent>,
      @Inject(MAT_DIALOG_DATA)public editdata:any,
      private formBuilder:FormBuilder) { }

  categoria: CategoriaModel= new CategoriaModel;
  categorias: Array<any> = new Array();
  categoriaForm!: FormGroup;
 

  ngOnInit(): void {
    this.categoriaForm = this.formBuilder.group({
      
      nome : ['', Validators.required],
      id : ['', Validators.required]
    });
    console.log(this.editdata);
 
    if(this.editdata.id > 0){
      this.action="Atualizar"
      this.categoriaForm.controls['nome'].setValue(this.editdata.nome);
      this.categoriaForm.controls['id'].setValue(this.editdata.id);
    }
  }


  listarCategorias(){
    this.categoriaService.listarCategorias().subscribe(categorias =>{
      this.categorias = categorias
    }, err =>{
        console.log("erro ao listar as categorias", err);
    })
  }

  CadastrarCategorias(){
    if(this.editdata.id == 0){
      this.categoria.id = this.categoriaForm.value.id ;
      this.categoria.nome = this.categoriaForm.value.nome;

      this.categoriaService.CadastrarCategorias(this.categoria).subscribe(categoria =>{
        this.categoria = new CategoriaModel();
        this.listarCategorias();
        this.categoriaForm.reset();
        this.dialogRef.close();
        }, err =>{
          console.log('Error ao cadastrar um plano', err) 
        })
    
    }else{
      
      this.categoria.id = this.categoriaForm.value.id;
      this.categoria.nome = this.categoriaForm.value.nome;

      this.categoriaService.AtualizarCategorias(this.categoria.id, this.categoria).subscribe(categoria =>{
        this.categoria = new CategoriaModel();
        this.listarCategorias();
        this.categoriaForm.reset();
        this.dialogRef.close();
      }, err =>{
        console.log('Error ao editar um plano', err)
      })

    }
  }

  AtualizarCategorias(id:number){
    this.categoriaService.AtualizarCategorias(id, this.categoria).subscribe(categoria =>{
      this.categoria = new CategoriaModel();
      this.listarCategorias();
      this.aoSalvarFechar();
    })
  }

  aoSalvarFechar(){
    let ref= document.getElementById('voltar');
    ref?.click()
  }
}