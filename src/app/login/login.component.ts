
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule,
            MatButtonModule,  
            MatFormFieldModule,
            FormsModule,
            CommonModule
             
            
        
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.login(this.email, this.password)) {      
      console.log('Login exitoso');
      this.router.navigate(['/dashboard']); // Redirige al dashboard
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
    }
  }

}
