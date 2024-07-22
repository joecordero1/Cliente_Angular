import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Modelo/Persona.model';
import { PersonaService } from '../../../Servicios/Persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {
  personas$?: Observable<Persona[]>;

  constructor(private personaServicio: PersonaService, private enrutador: Router) { }

  ngOnInit(): void {
    this.personas$ = this.personaServicio.obtenerPersonas();
    //Aqui verifico los valores
    this.personas$.subscribe({
      next: (personas) => {
        console.log('Personas recuperadas de la API:', personas);
      },
      error: (err) => {
        console.error('Error al recuperar personas:', err);
      }
    });
  }

  Eliminar(id: string): void {
    this.personaServicio.eliminarPersona(id)
      .subscribe({
        next: (response) => {
          // Actualiza la lista después de eliminar
          this.personas$ = this.personaServicio.obtenerPersonas();
          this.enrutador.navigateByUrl('/personas');
        },
        error: (err) => {
          console.error('Error eliminando persona:', err);
        }
      });
  }
}
