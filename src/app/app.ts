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
  // INTERACTIVIDAD: Método analítico para alternar el estado de una tarea
  public alternarEstadoTarea(idTarea: number): void {
    // Buscamos la tarea dentro de nuestro arreglo en memoria usando lógica deductiva
    this.listaTareas = this.listaTareas.map(tarea => {
      if (tarea.id === idTarea) {
        // Retornamos el objeto clonado pero invirtiendo el booleano 'completed'
        return { ...tarea, completed: !tarea.completed };
      }
      return tarea;
    });
    this.cdr.detectChanges();
  }
  public obtenerTareasCompletadasCount(): number {
  return this.listaTareas.filter(t => t.completed).length;
}
}