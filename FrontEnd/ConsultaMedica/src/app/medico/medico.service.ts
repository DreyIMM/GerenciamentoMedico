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
    return this.http.get(`${API_PATH}medicos`, this.login.getOptions());
  }

  CadastrarMedicos(medico: MedicoModel): Observable<any> {
    return this.http.post(`${API_PATH}medico`, medico, this.login.getOptions());
  }    

  excluirMedico(id:number){
    return this.http.delete(`${API_PATH}medico/${id}`, this.login.getOptions());
  } 

  atualizarMedicos(id:any, medico: MedicoModel): Observable<any>{
    return this.http.put(`${API_PATH}medico/${id}`, medico);
  }

  listarCategorias(): Observable<any> {
    return this.http.get(`${API_PATH}categorias`,this.login.getOptions());
  }

}
