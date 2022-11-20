import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {Buffer} from 'buffer';
import { tap } from 'rxjs';
import { ClienteLogado } from '../cliente/clienteLogado';



@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  username = ""
  password = ""
  public cliente = new ClienteLogado();
  public logado = false;
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    this.username = username;
    this.password = password;

    return this.http.post(`${API_PATH}login`,null,this.getOptions()).pipe(tap((dados) => {    
      this.registerSuccessfulLogin(dados);
      this.logado = true;
      }));
  }

  getOptions(){
    return {
      headers: new HttpHeaders ({
          'Content-Type': 'application/json',
          'Authorization' : 'Basic ' + Buffer.from(`${this.username}:${this.password}`, 'utf-8').toString('base64')
      }) };
  }


  registerSuccessfulLogin(cliente: any) {
    console.log(cliente);
    this.cliente = cliente;
  }

}
