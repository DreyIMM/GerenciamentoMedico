import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoComponent } from './medico/medico.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ReservaComponent } from './reserva/reserva.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "login", component: LoginComponent, pathMatch: 'full'},
  {path : "home", component: HomeComponent},
  {path: "medicos", component: MedicoComponent},
  {path: "categorias", component: CategoriaComponent},
  {path: "cliente", component: ClienteComponent},
  {path: "reserva", component: ReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
