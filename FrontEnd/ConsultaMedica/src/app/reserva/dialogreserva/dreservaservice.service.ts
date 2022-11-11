import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from './reserva.models';
import { API_PATH } from 'src/environments/environment';
import { Cliente } from 'src/app/cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class DreservaserviceService {

  constructor(private http: HttpClient) { }

  listarTodasReservas(): Observable<Reserva[]>{
     return this.http.get<Reserva[]>(`${API_PATH}consulta`);
  } 

  listarMedicos(): Observable<any> {
    return this.http.get(`${API_PATH}medico`);
  }

  cadastrarReserva(reserva: Reserva): Observable<any>{
      return this.http.post(`${API_PATH}consulta`, reserva)
  }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_PATH}cliente`);
  }

}
