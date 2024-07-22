import { Injectable } from '@angular/core';
import { CrearPersonaPedido } from '../Presentacion/Persona/Modelo/CrearPersonaPedido.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Presentacion/Persona/Modelo/Persona.model';
import { environment } from '../../../../src/environments/environment';
import { ActualizarPersonaPedido } from '../Presentacion/Persona/Modelo/ActualizarPersonaPedido.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  agregarPersona(model: CrearPersonaPedido): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/personas`, model);
  }

  obtenerPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${environment.apiBaseUrl}/api/personas`);
  }

  obtenerPersonaPorId(id: string): Observable<Persona> {
    return this.http.get<Persona>(`${environment.apiBaseUrl}/api/personas/${id}`);

  }

  actualizarPersona(id: string, actualizarPersonaPedido: ActualizarPersonaPedido): Observable<Persona> {
    return this.http.put<Persona>(`${environment.apiBaseUrl}/api/personas/${id}`, actualizarPersonaPedido);
  }

  eliminarPersona(id: string): Observable<Persona> {
    return this.http.delete<Persona>(`${environment.apiBaseUrl}/api/personas/${id}`);
  }
}
