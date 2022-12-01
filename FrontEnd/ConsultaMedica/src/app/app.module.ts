import {HttpClientModule } from '@angular/common/http';
import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './categoria/categoria.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicoComponent } from './medico/medico.component';
import { SideBarModule } from './side-bar/side-bar.module';
import { ClienteComponent } from './cliente/cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservaComponent } from './reserva/reserva.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogreservaComponent } from './reserva/dialogreserva/dialogreserva.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginserviceService } from './login/loginservice.service';
import { HomeComponent } from './home/home.component';
import { DialogcategoriaComponent } from './categoria/dialogCategoria/dialogCategoria.component';
import { DialogMedicoComponent } from './medico/dialogMedico/dialogMedico.component';
import { DialogClienteComponent } from './cliente/dialogCliente/dialogCliente.component';
import { DialogLoginComponent } from './login/dialogLogin/dialogLogin.component';

registerLocaleData(localePT);



@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    NavbarComponent,
    SideBarComponent,
    FooterComponent,
    MedicoComponent,
    ClienteComponent,
    ReservaComponent,
    DialogreservaComponent,
    LoginComponent,
    HomeComponent,
    DialogcategoriaComponent,
    DialogMedicoComponent,
    DialogLoginComponent,
    DialogClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SideBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginserviceService, { provide: LOCALE_ID, useValue: 'pt-br' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
