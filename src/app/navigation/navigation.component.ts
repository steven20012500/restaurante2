import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  isAuthenticated: boolean = false;
  isMobileMenuOpen = false;
  isUserMenuOpen = false;
  constructor(private storageService: StorageService, private authService: AuthService) {}
  ngOnInit(): void {
    //recargar una sola vez la pagina
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  cerrarSesion() {
    this.authService.logoutUser();
    this.storageService.removeItem('token');
    this.isAuthenticated = this.authService.isLoggedIn();
  }
}

