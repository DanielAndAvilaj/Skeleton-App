import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userEmail: string = '';
  private userPassword: string = '';
  private userAge: number = 0;
  private userPhone: string = '';

  constructor() {}

  // Getters y Setters para los datos del usuario
  setUserData(email: string, password: string, age: number, phone: string) {
    this.userEmail = email;
    this.userPassword = password;
    this.userAge = age;
    this.userPhone = phone;
  }

  getUserData() {
    return {
      email: this.userEmail,
      password: this.userPassword,
      age: this.userAge,
      phone: this.userPhone
    };
  }
}
