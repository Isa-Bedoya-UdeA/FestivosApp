import { Injectable } from '@angular/core';
import { environment } from '../../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FestivoService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos/`;
  }

  public verificar(fecha: Date): Observable<string> {
    // Esperar un string
    let year = fecha.getFullYear();
    let month = fecha.getMonth() + 1;
    let day = fecha.getUTCDate();
    return this.http.get(`${this.url}verificar/${year}/${month}/${day}`, {
      responseType: 'text',
    });
  }

  public listar(year: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}listar/${year}`);
  }
}
