import { Component } from '@angular/core';
import { IngresoService } from '../ingreso.service';
import { User } from '../user';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {
  facturaDatos: User = {
    email: 'steven20012500@gmail.com',
    password: '123456',
 };
 constructor(private ingresoService: IngresoService) { }

 
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
}
}
