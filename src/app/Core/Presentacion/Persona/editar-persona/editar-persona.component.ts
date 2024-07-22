import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonaService } from '../../../Servicios/Persona.service';
import { Persona } from '../Modelo/Persona.model';
import { ActualizarPersonaPedido } from '../Modelo/ActualizarPersonaPedido.model';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit, OnDestroy {
  id: string | null = null;
  paramsSubscription?: Subscription;
  editarPersonaSubscripcion?: Subscription;
  persona?: Persona;

  constructor(private ruta: ActivatedRoute,
              private personaServicio: PersonaService, 
              private enrutador: Router) {}

  ngOnInit(): void {
    this.paramsSubscription = this.ruta.paramMap.subscribe({
      next: (params) => {
       this.id = params.get('id');
       if (this.id){
        this.personaServicio.obtenerPersonaPorId(this.id)
        .subscribe({
          next: (response) => {
            this.persona = {
              ...response,
              fechaNacimiento: new Date(response.fechaNacimiento).toISOString().substring(0, 10)
            };

          },
          error: (err) => {
            console.error('Error fetching persona:', err);
          }
        });
       }
      }
    });
}

      
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editarPersonaSubscripcion?.unsubscribe();
  }

  EnviarFormulario(): void {
    if (this.persona && this.id) {
      const actualizarPersonaPedido: ActualizarPersonaPedido = {
        ...this.persona,
        nombre: this.persona.nombre,
        apellido: this.persona.apellido,
        fechanacimiento: new Date(this.persona.fechaNacimiento)
      };

      // Agrego un console.log aquí para ver el objeto que se está enviando
      console.log('Actualizando persona con datos:', actualizarPersonaPedido);
      
      this.editarPersonaSubscripcion = this.personaServicio.actualizarPersona(this.id, actualizarPersonaPedido)
      .subscribe({
        next: () => {
          this.enrutador.navigateByUrl('/personas');
        },
        error: (err) => {
          console.error('Error actualizando persona:', err);
          // Mostrar un mensaje de error al usuario
          if (err.error && err.error.errors) {
            for (const key in err.error.errors) {
              if (err.error.errors.hasOwnProperty(key)) {
                console.error(`${key}: ${err.error.errors[key].join(', ')}`);
              }
            }
          }
        }
      });
    }
  }

  Eliminar(): void{
    if(this.id){
      this.personaServicio.eliminarPersona(this.id)
      .subscribe({
        next: (response) => {
          this.enrutador.navigateByUrl('/personas');
        }
      })
    }
  }
  Cancelar(): void{
    this.enrutador.navigateByUrl('/personas');
  }
}
