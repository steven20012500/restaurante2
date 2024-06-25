import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  isMobileMenuOpen = false;
  isUserMenuOpen = false;
  constructor(private storageService: StorageService) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  cerrarSesion() {
    this.storageService.removeItem('token');
  }
}

