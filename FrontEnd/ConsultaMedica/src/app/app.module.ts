import {HttpClientModule } from '@angular/common/http';
import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents  } from './app-routing.module';
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
    DialogreservaComponent
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
  providers: [CategoriaService, HttpClientModule, { provide: LOCALE_ID, useValue: 'pt-br' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
