import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaModel } from 'src/app/categoria/categoria.models';
import { API_PATH } from 'src/environments/environment';
import { LoginserviceService } from 'src/app/login/loginservice.service';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class DialogclienteService {

  constructor(private http: HttpClient, private login: LoginserviceService) { }

  listarCategorias(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`${API_PATH}categorias`,this.login.getOptions());
  }

  cadastrarCliente(cliente: Cliente): Observable<any>{
    return this.http.post(`${API_PATH}cliente`, cliente, this.login.getOptions());
  }

  editarCliente(id:number, cliente: Cliente): Observable<any>{
    return this.http.put(`${API_PATH}cliente/${id}`, cliente, this.login.getOptions());
  }

}
