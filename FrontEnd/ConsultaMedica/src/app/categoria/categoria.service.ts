import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from './categoria.models';
import { API_PATH } from 'src/environments/environment';
import { LoginserviceService } from '../login/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient, private login: LoginserviceService) {}


    listarCategorias(): Observable<any> {
      return this.http.get(`${API_PATH}categorias`,this.login.getOptions());
    }

    CadastrarCategoria(categoria: CategoriaModel): Observable<any> {
      return this.http.post(`${API_PATH}categoria`, categoria, this.login.getOptions());
    }    

    excluirCategoria(id:any){
      return this.http.delete(`${API_PATH}categoria/${id}`, this.login.getOptions());
    } 

    atualizarCategoria(id:any, categoria: CategoriaModel): Observable<any>{
      return this.http.put(`${API_PATH}categoria/${id}`,categoria, this.login.getOptions());
    }
   
}
