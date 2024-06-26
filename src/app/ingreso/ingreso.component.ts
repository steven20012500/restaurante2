import { Component } from '@angular/core';
import { IngresoService } from '../services/ingreso.service';
import { User } from '../class/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Import the correct module for Router
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {
  
  //facturaDatos: User = {
   // email: 'steven20012500@gmail.com',
    //password: '123456',
 //};
 /*constructor(private ingresoService: IngresoService) { }

 enviarFactura() {
  this.ingresoService.ingresoUser(this.facturaDatos).subscribe({
    next: response => {
      console.log('Solicitud enviada', response);
      alert('Login correcto');
    },
    error: error => {
      console.error('Error al enviar la solicitud', error);
      alert('Error al enviar la solicitud: ' + error.message);
    },
    complete: () => {
      console.log('Solicitud completada');
    }
  });
}*/
usuarios: User = {
  email: '',
  password: '',
};

constructor(private authService: AuthService,private storageService: StorageService, private router: Router) {}

loginUser() {
  this.authService.loginUser(this.usuarios).subscribe(
    res => {
      this.storageService.setItem('token', res.token);
      this.router.navigate(['/verMenu']);
    },
    err => console.error(err)
  );
}

}
