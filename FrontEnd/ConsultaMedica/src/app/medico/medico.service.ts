import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicoModel } from './medico.models';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }


  listarMedicos(): Observable<any> {
    return this.http.get("http://localhost:8080/medico/");
  }

  CadastrarMedicos(categoria: MedicoModel): Observable<any> {
    return this.http.post("http://localhost:8080/medico/", categoria);
  }    

  excluirMedicos(id:any){
    return this.http.delete("http://localhost:8080/medico/".concat(id));
  } 

  atualizarMedicos(id:any, categoria: MedicoModel): Observable<any>{
    return this.http.put("http://localhost:8080/medico/".concat(id),categoria);
  }

}
