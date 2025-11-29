import { Component } from '@angular/core';
import { Task } from '../../interfaces/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
 tareas: Task[] = [
    { id: 1, title: 'Aprender Angular', description: 'Estudiar componentes, directivas y rutas', completed: false },
    { id: 2, title: 'Crear proyecto', description: 'Desarrollar el gestor de tareas', completed: true },
    { id: 3, title: 'Revisar código', description: 'Hacer code review del proyecto', completed: false }
  ];

  // Para agregar tarea rápida
  nuevaTareaRapida: string = '';

  cambiarEstado(tarea: Task): void {
    tarea.completed = !tarea.completed;
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  onFocus(): void {
    console.log('Input activo');
  }

  onBlur(): void {
    console.log('Input inactivo');
  }

  // Agregar tarea rápida
  agregarTareaRapida(): void {
    if (this.nuevaTareaRapida.trim()) {
      alert(`Agregando tarea: ${this.nuevaTareaRapida}`);
      
      const nuevaTarea: Task = {
        id: this.tareas.length > 0 ? Math.max(...this.tareas.map(t => t.id)) + 1 : 1,
        title: this.nuevaTareaRapida,
        description: 'Tarea agregada rápidamente',
        completed: false
      };
      
      this.tareas.push(nuevaTarea);
      this.nuevaTareaRapida = '';
    }
  }
}
