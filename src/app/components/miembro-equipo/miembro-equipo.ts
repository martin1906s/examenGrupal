import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-miembro-equipo',
  imports: [],
  templateUrl: './miembro-equipo.html',
  styleUrl: './miembro-equipo.css',
})
export class MiembroEquipoComponent {
  @Input() nombreMiembro: string = '';
  @Input() rolMiembro: string = '';
  
  @Output() incrementarContador = new EventEmitter<void>();
   @Output() disminuir = new EventEmitter<void>();

  onBotonClick(): void {
    this.incrementarContador.emit();
  }
  disClick(): void {
    this.disminuir.emit();
  }
}
