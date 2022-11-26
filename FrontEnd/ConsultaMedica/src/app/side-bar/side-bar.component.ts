import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../login/loginservice.service';
import { ClienteLogado } from '../cliente/clienteLogado';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['../app.component.css']
})

export class SideBarComponent implements OnInit {

  public cliente: ClienteLogado = new ClienteLogado ;

  constructor(private login: LoginserviceService) { }

  ngOnInit(): void {
    this.cliente = this.login.cliente

  }

}
