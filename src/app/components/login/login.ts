import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 1. Importa FormsModule
import { Router, RouterLink } from '@angular/router'; // 2. Importa Router y RouterLink
import { AuthService } from '../../services/auth-service'; // 3. Importa el servicio de autenticación

@Component({
  selector: 'app-login',
  // Añade FormsModule a imports para usar [(ngModel)]
  standalone: true, // Asegúrate de que sea standalone si no lo especificaste
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // Propiedades para capturar los datos del formulario
  email: string = '';
  password: string = '';

  // Inyecta AuthService y Router en el constructor
  constructor(private authService: AuthService, private router: Router) {}

  logInUser() {
    // 1. Validaciones básicas
    if (this.email === '' || this.password === '') {
      alert('Por favor, ingrese su correo y contraseña.');
      return;
    }

    // 2. Prepara las credenciales
    const credenciales = {
      email: this.email,
      password: this.password,
    };

    // 3. Llama al servicio de login
    this.authService.login(credenciales).subscribe({
      next: (response) => {
        // El token ya se guardó en localStorage dentro del .pipe(tap) del AuthService
        alert('✅ ¡Inicio de sesión exitoso!');
        console.log('Inicio de sesión exitoso:', response);

        // Redirige al usuario a la página principal o dashboard (ejemplo: '/home')
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        // Manejo de errores (ej. credenciales incorrectas)
        const errorMessage = error.error?.message || 'Error desconocido al iniciar sesión.';
        alert(`❌ Error al iniciar sesión: ${errorMessage}`);
        console.error('Error durante el login:', error);
      },
    });
  }
}