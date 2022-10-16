import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from './categoria.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {}


    listarCategorias(): Observable<any> {
      return this.http.get("http://localhost:8080/categoria/");
    }

    CadastrarCategoria(categoria: CategoriaModel): Observable<any> {

      return this.http.post("http://localhost:8080/categoria/", categoria);
      
    }

    
   
}
