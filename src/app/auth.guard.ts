import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { StorageService } from './storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const storageService = inject(StorageService);
  const authService = inject(AuthService);
  console.log('authGuard', storageService.getItem('token'));
  return authService.isLoggedIn();
};
