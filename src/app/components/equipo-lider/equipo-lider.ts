import { Component } from '@angular/core';
import { MiembroEquipoComponent } from '../miembro-equipo/miembro-equipo';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-equipo-lider',
  imports: [MiembroEquipoComponent, Navbar],
  templateUrl: './equipo-lider.html',
  styleUrl: './equipo-lider.css',
})
export class EquipoLiderComponent {
  contador: number = 0;
  
  // Datos para enviar al componente hijo via @Input
  nombreLider: string = 'Carlos García';
  rolLider: string = 'Desarrollador Frontend';

  incrementar(): void {
    this.contador++;
    console.log('Contador incrementado:', this.contador);
  }
  dismi(): void {
    this.contador--;
    console.log('Contador disminuir:', this.contador);
  }
}
