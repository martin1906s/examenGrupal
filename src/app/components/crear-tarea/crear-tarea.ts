import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-crear-tarea',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './crear-tarea.html',
  styleUrl: './crear-tarea.css',
})
export class CrearTareaComponent {
  titulo: string = '';
  descripcion: string = '';
  mostrarError: boolean = false;

  guardarTarea(): void {
    if (!this.titulo.trim()) {
      this.mostrarError = true;
      return;
    }
    
    this.mostrarError = false;
    console.log('Guardando tarea:', {
      titulo: this.titulo,
      descripcion: this.descripcion
    });
    
    alert(`Tarea "${this.titulo}" guardada exitosamente!`);
    
    // Limpiar formulario
    this.titulo = '';
    this.descripcion = '';
  }

  onTituloChange(): void {
    if (this.titulo.trim()) {
      this.mostrarError = false;
    }
  }
}
