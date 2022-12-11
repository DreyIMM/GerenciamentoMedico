import { Component } from '@angular/core';
import { LoginserviceService } from './login/loginservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsultaMedica';

  logado: boolean = false;

  constructor(public service: LoginserviceService){
  }

  ngOnInit(){
  }


}
