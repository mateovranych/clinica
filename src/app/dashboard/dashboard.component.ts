import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PacientesComponent } from "../pacientes/pacientes.component";
import { SecretariosComponent } from "../secretarios/secretarios.component";
import { TurnosComponent } from '../turnos/turnos.component';
import { CasaComponent } from "../casa/casa.component";
import { CalendarioComponent } from "../calendario/calendario.component";



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    CommonModule,
    PacientesComponent,
    SecretariosComponent,
    TurnosComponent,
    CasaComponent,
    CalendarioComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // Cambia styleUrl a styleUrls
})
export class DashboardComponent implements OnInit {
  selectedOption: string = '';

  constructor(private router : Router) {
      
  }

  ngOnInit(): void {
    
    console.log('Dashboard cargado.'); 
  }
  
  cerrarSesion() {
    this.router.navigate(['']); 
    console.log('Sesión cerrada.'); 
  }

  @ViewChild(MatSidenav, { static: true })
  sidenav!: MatSidenav;

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
