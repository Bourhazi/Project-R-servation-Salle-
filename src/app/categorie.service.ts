import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from './categorie';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CategorieService {
  private baseUrlList="http://localhost:8085/categories"
  private baseUrl="http://localhost:8085/categorie"

  constructor(private httpClient : HttpClient , private authService: AuthService) {

  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getCategoriesList(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(`${this.baseUrlList}`);
  }

  createCategory(categorie: Categorie): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, categorie, { headers: this.getHeaders() });
  }

  getCategorieId(id: number): Observable<Categorie> {
    return this.httpClient.get<Categorie>(`${this.baseUrl}/${id}`, { headers: this.getHeaders() });
  }

  updateCategorie(id: number, categorie: Categorie): Observable<Object> {
    return this.httpClient.put<Categorie>(`${this.baseUrl}/${id}`, categorie, { headers: this.getHeaders() });
  }

  deleteCategorie(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { headers: this.getHeaders() });
  }
}
