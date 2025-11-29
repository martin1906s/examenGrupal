// src/app/guards/auth.guard.ts

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // 1. Verifica el estado de login (revisa si hay un token JWT en localStorage)
  if (authService.isLoggedIn()) {
    // 2. Si hay token, permite el acceso a la ruta.
    return true;
  } else {
    // 3. Si no hay token, redirige al usuario a la página de login.
    router.navigate(['/logIn']); // Cambia '/login' a la ruta de tu componente de inicio de sesión
    return false;
  }
};
