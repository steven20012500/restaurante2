import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const storageService = inject(StorageService);
  const authService = inject(AuthService);
  console.log('authGuard', authService.getToken());
  return authService.isLoggedIn();
};
