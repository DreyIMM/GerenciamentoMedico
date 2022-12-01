import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { API_PATH } from 'src/environments/environment';
import { DialogClienteComponent } from '../cliente/dialogCliente/dialogCliente.component';
import { DialogLoginComponent } from './dialogLogin/dialogLogin.component';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""
  errorMessage = 'Credenciais invalidas';
  sucessMessage!: string;
  invalidLogin = false;
  loginSucess = false;

  constructor(private login: LoginserviceService, private route: Router,public dialog:MatDialog) {
  }

  ngOnInit(): void {
    this.username = ""
    this.password = ""
  }

  handleLogin(){
    this.login.login(this.username, this.password).subscribe(
      result =>{
      this.invalidLogin = false;
      this.loginSucess = true ;
      this.sucessMessage = 'Login com sucesso';
      this.route.navigate(['/home'])
      //criar um component com a principal (retirar do app)
    }, () =>{
      this.invalidLogin = true;
      this.loginSucess = false; 
    });
  }
  openDialog() {
    this.dialog.open(DialogClienteComponent, {
       width: '30%',
    })
}
  
}
