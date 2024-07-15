import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://ec2-18-191-140-37.us-east-2.compute.amazonaws.com:3000/api-menu/orden';

  
  constructor(private http: HttpClient) { }

    createOrder(orderData: any, token: string): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
  
      return this.http.post<any>(this.apiUrl, orderData, { headers }).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 403) {
            console.error('Acceso prohibido:', error.statusText); // Loguea el mensaje de estado
            return throwError('Acceso prohibido'); // Maneja el error específico aquí
          } else {
            // Para otros errores, puedes manejarlos de otra manera o lanzarlos nuevamente
            return throwError(error);
          }
        })
      );
    }
}
