import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  usuarios: User = {
    email: '',
    password: '',
 };
 constructor(private userService: UserService) { }
 enviarFactura() {
       //ejecutar impuestos
     this.userService.agregarUser(this.usuarios).subscribe({
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
