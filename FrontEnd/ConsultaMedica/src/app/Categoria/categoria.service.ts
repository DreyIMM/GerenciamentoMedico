import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { ICategoria } from './ICategoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private HttpClient: HttpClient) { }

  obterTodos(){
    return this.HttpClient.get<ICategoria[]>(`${API_PATH}categoria`).toPromise();
  }
}
