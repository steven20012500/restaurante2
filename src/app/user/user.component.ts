import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  facturaDatos: User = {
    email: 'steven20012500@gmail.com',
    password: '123456',
 };
 constructor(private userService: UserService) { }
 enviarFactura() {
       //ejecutar impuestos
     this.userService.agregarUser(this.facturaDatos).subscribe({
       next: response => {
         console.log('Factura enviada', response);
       },
       error: error => {
         console.error('Error al enviar la factura', error);
       },
       complete: () => {
         console.log('Solicitud completada');
       }
     });
}
}
