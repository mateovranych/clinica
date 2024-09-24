import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  nombre: string;
  apellido: string;
  dni: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'Secretaria 1 ', apellido: 'Pérez', dni: '512351233',},
  {position: 2, nombre: 'Secretaria 2', apellido: 'González', dni: '83947392', },
  {position: 3, nombre: 'Secretaria 3', apellido: 'Rodríguez', dni: '82938475', },

];

@Component({
  selector: 'app-secretarios',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './secretarios.component.html',
  styleUrl: './secretarios.component.scss'
})
export class SecretariosComponent {

  
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
