import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';
import { Navbar } from "./components/navbar/navbar";
import { CrearTareaComponent } from "./components/crear-tarea/crear-tarea";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Navbar, CrearTareaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
