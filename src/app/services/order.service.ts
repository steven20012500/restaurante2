import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api-menu/orden';

  
  constructor(private http: HttpClient) { }
/*
  createOrder(data: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.apiUrl, data, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Error del cliente:', error.error.message);
    } else {
      // El servidor devolvió un código de error
      console.error(
        `Código de error ${error.status}, ` +
        `mensaje: ${error.error}`);
    }
    // Devuelve un observable con un mensaje de error orientado al usuario
    return throwError('Algo salió mal; por favor, inténtalo de nuevo más tarde.');
  }*/
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
