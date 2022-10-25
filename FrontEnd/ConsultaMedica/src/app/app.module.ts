import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './categoria/categoria.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MedicoComponent } from './medico/medico.component';
import { SideBarModule } from './side-bar/side-bar.module';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    NavbarComponent,
    SideBarComponent,
    FooterComponent,
    MedicoComponent,
    routingComponents,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SideBarModule
  ],
  providers: [CategoriaService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
