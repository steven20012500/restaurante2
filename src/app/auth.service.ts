import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api-menu/ingreso';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {}
  
  loginUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  logoutUser(): void {
    this.storageService.removeItem('token');
    this.router.navigate(['/registro']);
  }

  getToken(): string | null {
    return this.storageService.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.storageService.getItem('token');
  }
}
