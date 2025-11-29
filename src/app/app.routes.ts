import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { SingIn } from './components/sing-in/sing-in';
import { Dashboard } from './components/dashboard/dashboard';
import { Maintenance } from './components/maintenance/maintenance';
import { ErrorPage } from './components/error-page/error-page';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea';
import { EquipoLiderComponent } from './components/equipo-lider/equipo-lider';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'logIn', component: Login},
    {path: 'signIn', component: SingIn},
    {path: 'dashboard', component: Dashboard},
    {path: 'maintenance', component: Maintenance},
    {path: 'crear-tarea', component: CrearTareaComponent},
    { path: 'comunicacion', component: EquipoLiderComponent },
    {path: 'errorPage', component: ErrorPage},
    { path: '**', redirectTo: '/errorPage', pathMatch: 'full' }
];
