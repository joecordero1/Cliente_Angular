import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './Core/Componentes/barra-navegacion/barra-navegacion.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ListaPersonaComponent } from './Core/Presentacion/Persona/lista-persona/lista-persona.component';
import { AgregarPersonaComponent } from './Core/Presentacion/Persona/agregar-persona/agregar-persona.component';
import { EditarPersonaComponent } from './Core/Presentacion/Persona/editar-persona/editar-persona.component';
import { VistaPrincipalComponent } from './Core/Presentacion/Vistas/vista-principal/vista-principal.component';
import { VistaHTMLComponent } from './Core/Presentacion/Persona/vista-html/vista-html.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    ListaPersonaComponent,
    AgregarPersonaComponent,
    EditarPersonaComponent,
    VistaPrincipalComponent,
    VistaHTMLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
