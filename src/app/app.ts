import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { DashboardService } from './services/dashboard';
import { Usuario } from './models/usuario.model';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private dashboardService = inject(DashboardService);
  private cdr = inject(ChangeDetectorRef); 

  public listaUsuarios: Usuario[] = [];
  public listaTareas: Tarea[] = [];
  public cargando: boolean = true;

  ngOnInit(): void {
    // 1. Traer Usuarios
    this.dashboardService.getUsuarios().subscribe({
      next: (usuariosDB) => {
        this.listaUsuarios = usuariosDB;
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Error al traer usuarios:', err)
    });

    // 2. Traer Tareas
    this.dashboardService.getTareas().subscribe({
      next: (tareasDB) => {
        this.listaTareas = tareasDB.slice(0, 10);
        this.cargando = false; 
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Error al traer tareas:', err)
    });
  }
}