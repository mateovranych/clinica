
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';


export interface PeriodicElement {
  position: number;
  nombre: string;
  apellido: string;
  dni: string;
  hora: string;
  fechaDic: string; 
  Odontologo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
    {position: 1, nombre: 'Juan', apellido: 'Pérez', dni: '43562343', hora: '09:00', fechaDic: 'lunes', Odontologo: 'Dr. López'},
    {position: 2, nombre: 'María', apellido: 'González', dni: '83947392', hora: '09:30', fechaDic: 'martes', Odontologo: 'Dr. Torres'},
    {position: 3, nombre: 'Pedro', apellido: 'Rodríguez', dni: '82938475', hora: '10:00', fechaDic: 'miércoles', Odontologo: 'Dr. González'},
    {position: 4, nombre: 'Lucía', apellido: 'López', dni: '13284756', hora: '10:30', fechaDic: 'jueves', Odontologo: 'Dr. López'},
    {position: 5, nombre: 'Ana', apellido: 'Fernández', dni: '65928341', hora: '11:00', fechaDic: 'viernes', Odontologo: 'Dr. Torres'},
    {position: 6, nombre: 'José', apellido: 'Martínez', dni: '91237486', hora: '11:30', fechaDic: 'lunes', Odontologo: 'Dr. González'},
    {position: 7, nombre: 'Laura', apellido: 'Hernández', dni: '82736459', hora: '12:00', fechaDic: 'martes', Odontologo: 'Dr. López'},
    {position: 8, nombre: 'Luis', apellido: 'García', dni: '74265831', hora: '12:30', fechaDic: 'miércoles', Odontologo: 'Dr. Torres'},
    {position: 9, nombre: 'Clara', apellido: 'Sánchez', dni: '65321874', hora: '13:00', fechaDic: 'jueves', Odontologo: 'Dr. González'},
    {position: 10, nombre: 'Diego', apellido: 'Torres', dni: '83726541', hora: '13:30', fechaDic: 'viernes', Odontologo: 'Dr. López'},
    {position: 11, nombre: 'Sofía', apellido: 'Jiménez', dni: '91283476', hora: '14:00', fechaDic: 'lunes', Odontologo: 'Dr. Torres'},
    {position: 12, nombre: 'Andrés', apellido: 'Ramírez', dni: '65473829', hora: '14:30', fechaDic: 'martes', Odontologo: 'Dr. González'},
    {position: 13, nombre: 'Victoria', apellido: 'Morales', dni: '23456789', hora: '15:00', fechaDic: 'miércoles', Odontologo: 'Dr. López'},
    {position: 14, nombre: 'Francisco', apellido: 'Torres', dni: '34567890', hora: '15:30', fechaDic: 'jueves', Odontologo: 'Dr. Torres'},
    {position: 15, nombre: 'Gabriela', apellido: 'Cruz', dni: '45678901', hora: '16:00', fechaDic: 'viernes', Odontologo: 'Dr. González'},
    {position: 16, nombre: 'Pablo', apellido: 'Alvarez', dni: '56789012', hora: '16:30', fechaDic: 'lunes', Odontologo: 'Dr. López'},
    {position: 17, nombre: 'Valentina', apellido: 'Castro', dni: '67890123', hora: '09:00', fechaDic: 'martes', Odontologo: 'Dr. Torres'},
    {position: 18, nombre: 'Carlos', apellido: 'Gómez', dni: '78901234', hora: '09:30', fechaDic: 'miércoles', Odontologo: 'Dr. González'},
    {position: 19, nombre: 'Elena', apellido: 'Ponce', dni: '89012345', hora: '10:00', fechaDic: 'jueves', Odontologo: 'Dr. López'},
    {position: 20, nombre: 'Fernando', apellido: 'Rivas', dni: '90123456', hora: '10:30', fechaDic: 'viernes', Odontologo: 'Dr. Torres'},
    {position: 21, nombre: 'Natalia', apellido: 'Rojas', dni: '11234567', hora: '11:00', fechaDic: 'lunes', Odontologo: 'Dr. González'},
    {position: 22, nombre: 'Emilio', apellido: 'Paz', dni: '22345678', hora: '11:30', fechaDic: 'martes', Odontologo: 'Dr. López'},
    {position: 23, nombre: 'Patricia', apellido: 'Fuentes', dni: '33456789', hora: '12:00', fechaDic: 'miércoles', Odontologo: 'Dr. Torres'},
    {position: 24, nombre: 'Manuel', apellido: 'Benítez', dni: '44567890', hora: '12:30', fechaDic: 'jueves', Odontologo: 'Dr. González'},
    {position: 25, nombre: 'Jazmín', apellido: 'Vargas', dni: '55678901', hora: '13:00', fechaDic: 'viernes', Odontologo: 'Dr. López'},
    {position: 26, nombre: 'Ricardo', apellido: 'Salazar', dni: '66789012', hora: '13:30', fechaDic: 'lunes', Odontologo: 'Dr. Torres'},
    {position: 27, nombre: 'Mariana', apellido: 'Soto', dni: '77890123', hora: '14:00', fechaDic: 'martes', Odontologo: 'Dr. González'},
    {position: 28, nombre: 'Gustavo', apellido: 'Maldonado', dni: '88901234', hora: '14:30', fechaDic: 'miércoles', Odontologo: 'Dr. López'},
    {position: 29, nombre: 'Silvia', apellido: 'Escobar', dni: '99012345', hora: '15:00', fechaDic: 'jueves', Odontologo: 'Dr. Torres'},
    {position: 30, nombre: 'Berta', apellido: 'Hernández', dni: '10123456', hora: '15:30', fechaDic: 'viernes', Odontologo: 'Dr. González'},
    {position: 31, nombre: 'Hugo', apellido: 'Cabrera', dni: '11123456', hora: '16:00', fechaDic: 'lunes', Odontologo: 'Dr. López'},
    {position: 32, nombre: 'Rocío', apellido: 'Díaz', dni: '12123456', hora: '16:30', fechaDic: 'martes', Odontologo: 'Dr. Torres'},
    {position: 33, nombre: 'Arturo', apellido: 'Mora', dni: '13123456', hora: '09:00', fechaDic: 'miércoles', Odontologo: 'Dr. González'},
    {position: 34, nombre: 'Carmen', apellido: 'Rojas', dni: '14123456', hora: '09:30', fechaDic: 'jueves', Odontologo: 'Dr. López'},
    
];

@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [MatTableModule,
            MatPaginatorModule,
            MatMenuModule
  ],
  templateUrl: './turnos.component.html',
  styleUrl: './turnos.component.scss'
})

export class TurnosComponent {
  displayedColumns: string[] = ['position', 'nombre', 'apellido', 'dni', 'hora', 'fechaDic', 'Odontologo','acciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA); 
  


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  modificar(element: PeriodicElement) {
    // Lógica para modificar el elemento
    console.log('Modificar:', element);
    // Aquí podrías abrir un modal con un formulario pre-llenado para editar los datos del paciente
  }

  eliminar(element: PeriodicElement) {
    // Lógica para eliminar el elemento
    console.log('Eliminar:', element);
    this.dataSource.data = this.dataSource.data.filter(e => e.position !== element.position);
  }

}
