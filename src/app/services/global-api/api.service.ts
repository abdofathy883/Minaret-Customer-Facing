import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiBaseUrl}/${endpoint}`);
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiBaseUrl}/${endpoint}`, body);
  }

  // put<T>(endpoint: string, body: any): Observable<T> {
  //   return this.http.put<T>(`${this.apiBaseUrl}/${endpoint}`, body);
  // }

  // patch<T>(endpoint: string, body: any): Observable<T> {
  //   return this.http.patch<T>(`${this.apiBaseUrl}/${endpoint}`, body);
  // }

  // delete<T>(endpoint: string): Observable<T> {
  //   return this.http.delete<T>(`${this.apiBaseUrl}/${endpoint}`);
  // }
}
