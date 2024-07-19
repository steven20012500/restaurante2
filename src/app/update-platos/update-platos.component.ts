import { Component, OnInit } from '@angular/core';
import { Menu } from '../class/menu';
import { MenuService } from '../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-platos',
  templateUrl: './update-platos.component.html',
  styleUrl: './update-platos.component.css'
})
export class UpdatePlatosComponent implements OnInit {
  menu: Menu = { _id:'',nombre: '', descripcion: '', precio: 0, imagen: '', categoria: '',quantity:0,quantitySelected: false };
  
  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Aquí puedes añadir lógica para obtener los detalles del menú si es necesario
  }

  updateMenu(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.menuService.updateMenu(id, this.menu).subscribe(
        response => {
          console.log('Plato actualizado:', response);
          this.router.navigate(['/menus']);  // Navegar a la lista de menús o a otra página
        },
        error => {
          console.error('Error al actualizar el plato:', error);
        }
      );
    }
  }
}
