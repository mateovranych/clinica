import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecretariosComponent } from './secretarios/secretarios.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { TurnosComponent } from './turnos/turnos.component';
import { CalendarioComponent } from './calendario/calendario.component';

export const routes: Routes = [
    {path: '',  component: LoginComponent,},
    {path: 'dashboard',  component: DashboardComponent,},
    {path: 'secretarios',  component: SecretariosComponent,},
    {path: 'pacientes',  component: PacientesComponent,},
    {path: 'turnos',  component: TurnosComponent,},
    {path: 'calendario',  component: CalendarioComponent,}
];
