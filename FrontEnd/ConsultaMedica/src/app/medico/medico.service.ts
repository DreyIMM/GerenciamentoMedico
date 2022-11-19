import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicoModel } from './medico.models';
import { API_PATH } from 'src/environments/environment';
import { LoginserviceService } from '../login/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient, private login: LoginserviceService) { }


  listarMedicos(): Observable<any> {
    return this.http.get(`${API_PATH}medicos`, 
    { headers: { authorization: this.login.createBasicAuthToken("Andrey", "123") } });
  }

  CadastrarMedicos(medico: MedicoModel): Observable<any> {
    return this.http.post(`${API_PATH}medico`, medico);
  }    

  excluirMedicos(id:any){
    return this.http.delete(`${API_PATH}medico/${id}`);
  } 

  atualizarMedicos(id:any, categoria: MedicoModel): Observable<any>{
    return this.http.put(`${API_PATH}medico/${id}`, categoria);
  }

}
