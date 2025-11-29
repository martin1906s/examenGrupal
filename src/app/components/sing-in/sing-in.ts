import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // 1. Importa Router
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-sing-in',
  // Asegúrate de que AuthService esté importado en app.config.ts (Paso 1)
  standalone: true, // Asumo que es standalone
  imports: [RouterLink, FormsModule],
  templateUrl: './sing-in.html',
  styleUrl: './sing-in.css',
})
export class SingIn implements OnInit {
  rol: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.rol = 'usuario';
  }

  addUser() {
    if (this.rol == '' || this.email == '' || this.password == '' || this.repeatPassword == '') {
      alert('Por favor, complete todos los campos');
      return;
    }

    if (this.password !== this.repeatPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const userData = {
      email: this.email,
      password: this.password,
      rol: this.rol,
    };

    this.authService.registrar(userData).subscribe({
      next: (response) => {
        alert('✅ Registro exitoso! Ahora inicia sesión.');
        console.log('Usuario registrado:', response);

        this.router.navigate(['/login']);
      },
      error: (error) => {
        const errorMessage = error.error?.message || 'Error desconocido al registrar.';
        alert(`❌ Error de Registro: ${errorMessage}`);
        console.error('Error durante el registro:', error);
      },
    });
  }
}
