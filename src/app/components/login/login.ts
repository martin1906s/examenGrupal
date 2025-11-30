import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; 
import { AuthService } from '../../services/auth-service'; 

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  logInUser() {
    if (this.email === '' || this.password === '') {
      alert('Por favor, ingrese su correo y contraseña.');
      return;
    }

    const credenciales = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(credenciales).subscribe({
      next: (response) => {
        alert('✅ ¡Inicio de sesión exitoso!');
        console.log('Inicio de sesión exitoso:', response);

        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        const errorMessage = error.error?.message || 'Error desconocido al iniciar sesión.';
        alert(`❌ Error al iniciar sesión: ${errorMessage}`);
        console.error('Error durante el login:', error);
      },
    });
  }
}