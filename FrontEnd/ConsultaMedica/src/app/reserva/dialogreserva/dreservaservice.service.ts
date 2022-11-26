import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from './reserva.models';
import { API_PATH } from 'src/environments/environment';
import { Cliente } from 'src/app/cliente/cliente';
import { LoginserviceService } from '../../login/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class DreservaserviceService {

  constructor(private http: HttpClient, private login: LoginserviceService) { }
  
  listarMedicos(): Observable<any> {
    return this.http.get(`${API_PATH}medicos`, this.login.getOptions());
  }

  cadastrarReserva(reserva: Reserva): Observable<any>{
      return this.http.post(`${API_PATH}consultas`, reserva, this.login.getOptions())
  }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_PATH}clientes`, this.login.getOptions());
  }

  retornarHorarioFree(medico: any, data:any): Observable<any>{
    return this.http.get(`${API_PATH}consultas/${medico}/${data}`,this.login.getOptions()); 
  }

}
