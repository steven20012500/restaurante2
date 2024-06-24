import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-ver-menu',
  templateUrl: './ver-menu.component.html',
  styleUrl: './ver-menu.component.css'
})
export class VerMenuComponent implements OnInit {
  menu: Menu[] = [];
  constructor(private menuService: MenuService) { } 
  ngOnInit(): void {
    this.menuService.verPlatos().subscribe(menu => {
      this.menu = menu;  
    });
  }
}
