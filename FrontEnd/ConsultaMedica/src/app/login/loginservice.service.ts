import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {Buffer} from 'buffer';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  username = "Andrey"
  password = "123"
  public logado = false;
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.get(`${API_PATH}login`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
        this.logado = true;
        console.log(username, password);
      }));
  }

  getOptions(){
    return {headers: new HttpHeaders ({
          'Content-Type': 'application/json',
          'Authorization' : this.createBasicAuthToken(this.username, this.password) 
      }) };
  }


  createBasicAuthToken(username: string, password:string){
    return 'Basic ' + Buffer.from(`${username}:${password}`, 'utf-8').toString('base64');
  }

  registerSuccessfulLogin(username: string, password: string) {
    // save the username to session
  }

}
