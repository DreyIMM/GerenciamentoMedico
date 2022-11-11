import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicoModel } from './medico.models';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }


  listarMedicos(): Observable<any> {
    return this.http.get(`${API_PATH}medico`);
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
