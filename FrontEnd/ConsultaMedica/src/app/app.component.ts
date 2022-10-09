import { Component } from '@angular/core';
import { CategoriaService } from './Categoria/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsultaMedica';

  constructor(private CategoriaService: CategoriaService){}

  obterTodos(){
    this.CategoriaService.obterTodos()
    .then(categorias => console.log(categorias))
    .catch(error => console.log(error));

  }
}
