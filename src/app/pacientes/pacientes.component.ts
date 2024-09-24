import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  nombre: string;
  apellido: string;
  dni: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'Juan', apellido: 'Pérez', dni: '43562343',},
  {position: 2, nombre: 'María', apellido: 'González', dni: '83947392', },
  {position: 3, nombre: 'Pedro', apellido: 'Rodríguez', dni: '82938475', },
  {position: 4, nombre: 'Lucía', apellido: 'López', dni: '13284756', },
  {position: 5, nombre: 'Ana', apellido: 'Fernández', dni: '65928341',},
  {position: 6, nombre: 'José', apellido: 'Martínez', dni: '91237486',},
  {position: 7, nombre: 'Laura', apellido: 'Hernández', dni: '82736459',},
  {position: 8, nombre: 'Luis', apellido: 'García', dni: '74265831',},
  {position: 9, nombre: 'Clara', apellido: 'Sánchez', dni: '65321874', },
  {position: 10, nombre: 'Diego', apellido: 'Torres', dni: '83726541', },
];


@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss'
})
export class PacientesComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA); 

  modificar(element: PeriodicElement) {    
    console.log('Modificar:', element);    
  }

  eliminar(element: PeriodicElement) {
    
    console.log('Eliminar:', element);
    this.dataSource.data = this.dataSource.data.filter(e => e.position !== element.position);
  }

}
