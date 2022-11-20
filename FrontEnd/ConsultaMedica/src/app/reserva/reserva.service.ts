import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from './dialogreserva/reserva.models';
import { API_PATH } from 'src/environments/environment';
import { LoginserviceService } from '../login/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient, private login: LoginserviceService) { }

  listarTodasReservas(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${API_PATH}consultas`, this.login.getOptions());
 } 


}
