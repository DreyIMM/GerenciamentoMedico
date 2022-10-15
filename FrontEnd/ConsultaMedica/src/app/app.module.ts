import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './categoria/categoria.service';
import { DadosCategoriaComponent } from './dados-categoria/dados-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    DadosCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CategoriaService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
