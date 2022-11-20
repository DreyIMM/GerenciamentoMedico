import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { API_PATH } from 'src/environments/environment';
import { LoginserviceService } from '../login/loginservice.service';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http: HttpClient, private login: LoginserviceService) { }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_PATH}clientes`, this.login.getOptions());
  }
  
}
