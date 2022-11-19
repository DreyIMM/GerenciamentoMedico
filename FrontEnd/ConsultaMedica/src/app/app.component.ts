import { Component } from '@angular/core';
import { LoginserviceService } from './login/loginservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsultaMedica';

  constructor(public service: LoginserviceService){
  }



}
