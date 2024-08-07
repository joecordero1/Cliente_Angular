import { Component } from '@angular/core';
import { CrearPersonaPedido } from '../Modelo/CrearPersonaPedido.model';
import { PersonaService } from '../../../Servicios/Persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrl: './agregar-persona.component.css'
})
export class AgregarPersonaComponent {
  model: CrearPersonaPedido;
  constructor(private personaServicio: PersonaService, private enrutador: Router) {
    this.model = {
      nombre:'',
      apellido:'',
      fechanacimiento:new Date()
    };
  }

  EnviarFormulario() {
    console.log(this.model);
    this.personaServicio.agregarPersona(this.model)
    .subscribe({
      next: (response) => {
        console.log('Agregado con exito');
        this.enrutador.navigateByUrl('/personas');
      },
      error: (error) =>{

      }

    })
  }

  alCancelar(): void{
    this.enrutador.navigateByUrl('/personas');
  }

}
