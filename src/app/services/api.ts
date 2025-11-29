// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// **Opcional:** Usar un Token de Interceptor o Context
// import { API_URL } from 'tu-contexto';

@Injectable({
  // En Angular 17, `providedIn: 'root'` lo registra automáticamente como un singleton
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'http://localhost:3000/api';
  private tokenKey = 'access_token'; // Clave para localStorage

  constructor(private http: HttpClient) {}

  // 🔑 1. LOGIN: Petición POST para obtener el JWT
  login(credenciales: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credenciales).pipe(
      // 💡 Usa 'tap' para manejar la respuesta antes de que llegue al componente
      tap((response) => {
        if (response && response.data) {
          // El token JWT se llama 'data' según tu OpenAPI
          this.saveToken(response.data);
        }
      })
    );
  }

  /**
   * Método POST para Registrar un nuevo usuario (/api/registrar)
   * @param userData Objeto que contiene email, password y rol (según tu OpenAPI)
   */
  registrar(userData: any): Observable<any> {
    // 💡 Usa la ruta definida en tu OpenAPI: /api/registrar
    // No usamos 'withCredentials: true' aquí a menos que el backend requiera cookies para el registro.
    // Si el backend devuelve el JWT inmediatamente, podrías agregar '.pipe(tap(...this.saveToken(response.data)))'
    return this.http.post<any>(`${this.apiUrl}/registrar`, userData);
  }

  // 🔑 2. LOGOUT: Llama al endpoint de Express
  logout(): Observable<any> {
    // Esta llamada usará el token adjuntado por el Interceptor (ver Paso 3)
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      tap(() => {
        this.removeToken();
      })
    );
  }

  // 🔑 3. ALMACENAMIENTO: Manejo local del token
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
