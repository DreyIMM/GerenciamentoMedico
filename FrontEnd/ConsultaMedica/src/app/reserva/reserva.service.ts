import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from './dialogreserva/reserva.models';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  listarTodasReservas(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${API_PATH}consulta`);
  } 


}
