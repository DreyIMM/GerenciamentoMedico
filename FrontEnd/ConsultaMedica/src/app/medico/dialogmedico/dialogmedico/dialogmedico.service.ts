import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicoModel } from '../.././medico.models';
import { API_PATH } from 'src/environments/environment';
import { LoginserviceService } from '../../../login/loginservice.service';
import { CategoriaModel } from 'src/app/categoria/categoria.models';

@Injectable({
  providedIn: 'root'
})
export class DialogmedicoService {

  constructor(private http: HttpClient, private login: LoginserviceService) { }


  CadastrarMedicos(medico: MedicoModel): Observable<any> {
    return this.http.post(`${API_PATH}medico`, medico, this.login.getOptions());
  } 

  listarCategorias(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`${API_PATH}categorias`,this.login.getOptions());
  }

  atualizarMedicos(id:any, medico: MedicoModel): Observable<any>{
    return this.http.put(`${API_PATH}medico/${id}`, medico);
  }


}
