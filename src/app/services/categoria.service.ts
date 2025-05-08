import { Categorias } from './../interfaces/categorias';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:3000/categoria'; // Ajuste a URL se necessário

  constructor(private http: HttpClient) {}

  list(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.apiUrl);
  }

  add(categoria: Categorias): Observable<any> {
    return this.http.post(this.apiUrl, categoria);
  }

  update(id: string, categoria: Categorias): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, categoria);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
