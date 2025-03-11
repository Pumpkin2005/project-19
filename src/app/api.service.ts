import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`).pipe(
      catchError(this.handleError)
    );
  }

  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Сталася невідома помилка';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Помилка: ${error.error.message}`;
    } else {
      errorMessage = `Код помилки: ${error.status}, Повідомлення: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
