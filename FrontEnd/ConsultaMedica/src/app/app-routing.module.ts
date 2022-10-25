import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoComponent } from './medico/medico.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  {path: 'medicos', component: MedicoComponent},
  {path: 'categorias', component: CategoriaComponent},
  {path: 'clientes', component: ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MedicoComponent,CategoriaComponent]