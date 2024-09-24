import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule si lo estás usando
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';

import { RegistrarPacienteComponent } from '../registrar-paciente/registrar-paciente.component';

@Component({
  selector: 'app-casa',
  standalone: true,
  imports: [MatFormFieldModule,
            MatButtonModule,
            FormsModule,
            MatInputModule    
  ],
  templateUrl: './casa.component.html',
  styleUrl: './casa.component.scss'
})
export class CasaComponent {

  constructor(public dialog: MatDialog) {}

eliminarTurno() {
throw new Error('Method not implemented.');
}
editarTurno() {
throw new Error('Method not implemented.');
}
tomarTurno() {
throw new Error('Method not implemented.');
}
registrar() {
throw new Error('Method not implemented.');
}

openCrearPacienteDialog(): void {
  const dialogRef = this.dialog.open(RegistrarPacienteComponent, {
    height:'640px',
    width: '300px', 
    data: {} // Puedes pasar datos al dialog si lo necesitas
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Paciente registrado:', result);
      // Aquí puedes manejar la lógica para procesar los datos del paciente registrado
    }
  });
}


dniInput: string = ''; // Inicializa la propiedad dniInput

buscarPaciente() {
throw new Error('Method not implemented.');
}

}
