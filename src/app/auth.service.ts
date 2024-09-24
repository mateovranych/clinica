import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private validEmail = 'admin@gmail.com';
  private validPassword = 'Admin123!';

  constructor() { }

  login(email: string, password: string): boolean {
    
    return email === this.validEmail && password === this.validPassword;
  }
}
