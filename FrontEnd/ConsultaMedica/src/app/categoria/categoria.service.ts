import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from './categoria.models';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {}


    listarCategorias(): Observable<any> {
      return this.http.get(`${API_PATH}categoria`);
    }

    CadastrarCategoria(categoria: CategoriaModel): Observable<any> {
      return this.http.post(`${API_PATH}categoria`, categoria);
    }    

    excluirCategoria(id:any){
      return this.http.delete(`${API_PATH}categoria/${id}`);
    } 

    atualizarCategoria(id:any, categoria: CategoriaModel): Observable<any>{
      return this.http.put(`${API_PATH}categoria/${id}`,categoria);
    }
   
}
