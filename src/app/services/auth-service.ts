// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private tokenKey = 'access_token';

  constructor(private http: HttpClient) { }

  // 1. REGISTRO (/api/registrar)
  registrar(userData: any): Observable<any> {
    // Envía email, password, rol. No se espera token JWT aquí.
    return this.http.post<any>(`${this.apiUrl}/registrar`, userData);
  }

  // 2. LOGIN (/api/login)
  login(credenciales: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credenciales).pipe(
      // Guarda el token JWT (response.data) si el login es exitoso
      tap(response => {
        if (response && response.data) {
          this.saveToken(response.data);
        }
      })
    );
  }

  // 3. LOGOUT (/api/logout)
  logout(): Observable<any> {
    // La petición es interceptada y el JWT es adjuntado.
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      // Limpia el token local después de que el backend responde
      tap(() => {
        this.removeToken();
      })
    );
  }

  // --- MÉTODOS DE MANEJO DE TOKEN ---
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
