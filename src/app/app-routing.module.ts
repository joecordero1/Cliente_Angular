import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonaComponent } from './Core/Presentacion/Persona/lista-persona/lista-persona.component';
import { AgregarPersonaComponent } from './Core/Presentacion/Persona/agregar-persona/agregar-persona.component';
import { EditarPersonaComponent } from './Core/Presentacion/Persona/editar-persona/editar-persona.component';
import { VistaPrincipalComponent } from './Core/Presentacion/Vistas/vista-principal/vista-principal.component';

const routes: Routes = [
  {
    path: '',
    component: VistaPrincipalComponent
  },
  {
    path: 'personas',
    component: ListaPersonaComponent
  },
  {
    path: 'personas/agregar',
    component: AgregarPersonaComponent
  },
  {
    path:'personas/:id',
    component: EditarPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
