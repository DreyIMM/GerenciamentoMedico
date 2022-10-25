import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("http://localhost:8080/cliente/");
  }

  
}
