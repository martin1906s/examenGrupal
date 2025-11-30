import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { SingIn } from './components/sing-in/sing-in';
import { Dashboard } from './components/dashboard/dashboard';
import { Maintenance } from './components/maintenance/maintenance';
import { ErrorPage } from './components/error-page/error-page';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea';
import { EquipoLiderComponent } from './components/equipo-lider/equipo-lider';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'logIn', component: Login },
  { path: 'signIn', component: SingIn },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'maintenance', component: Maintenance, canActivate: [authGuard] },
  { path: 'crear-tarea', component: CrearTareaComponent, canActivate: [authGuard] },
  { path: 'comunicacion', component: EquipoLiderComponent, canActivate: [authGuard] },
  { path: 'errorPage', component: ErrorPage },
  { path: '**', redirectTo: '/errorPage', pathMatch: 'full' },
];
