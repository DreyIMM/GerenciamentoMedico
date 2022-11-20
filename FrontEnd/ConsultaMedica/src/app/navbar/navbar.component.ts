import { Component, OnInit } from '@angular/core';
import { ClienteLogado } from '../cliente/clienteLogado';
import { LoginComponent } from '../login/login.component';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../app.component.css']
})
export class NavbarComponent implements OnInit {

  public cliente: ClienteLogado = new ClienteLogado ;


  constructor(private login: LoginserviceService) { }

  ngOnInit(): void {
    this.cliente = this.login.cliente
  }

}
