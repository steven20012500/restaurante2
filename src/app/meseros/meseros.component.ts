import { Component } from '@angular/core';
import { Mesero } from '../mesero';
import { MeserosService } from '../meseros.service';

@Component({
  selector: 'app-meseros',
  templateUrl: './meseros.component.html',
  styleUrl: './meseros.component.css'
})
export class MeserosComponent {
  mesero: Mesero = {
    _id: '',
    nombre: '',
    imagen: '',
 };
 constructor(private meseroService: MeserosService) { }
 ingresarMesero() {
       //ejecutar impuestos
     this.meseroService.agregarMesero(this.mesero).subscribe({
       next: response => {
         console.log('Factura enviada', response);
         this.mesero = {
          _id: '',
          nombre: '',
          imagen: '',
        };
       },
       error: error => {
         console.error('Error ingresar mesero', error);
       },
       complete: () => {
         console.log('Solicitud completada');
       }
     });
}
}
