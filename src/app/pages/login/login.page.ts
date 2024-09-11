import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginUsuario: string = '';
  loginContrasena: string = '';
  loginEdad: number = 0;
  loginTelefono: string = '';

  constructor(private router: Router, private userService: UserService) {}

  login() {
    // Aquí asume que los datos del usuario son correctos (puedes implementar validaciones)
    this.userService.setUserData(this.loginUsuario, this.loginContrasena, this.loginEdad, this.loginTelefono);

    // Navegar a la página de perfil
    this.router.navigate(['/perfil']);
  }

  mostrarCredenciales() {
    this.router.navigate(['/inicio'], {
      state: {
        usuario: this.loginUsuario,
        contrasena: this.loginContrasena,
        edad: this.loginEdad,
        telefono: this.loginTelefono
      }
    });
  }
}
