import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/users`);
  }

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.apiUrl}/todos`);
  }
}