import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from './salle';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private baseUrl="http://localhost:8085/salle"

  constructor(private httpClient : HttpClient , private authService: AuthService) {

  }
  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getSallesList():Observable<Salle[]>{
    return this.httpClient.get<Salle[]>(`${this.baseUrl}` , { headers: this.getHeaders() });
  }
  createSalle(salle: Salle):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,salle, { headers: this.getHeaders() });
  }
  getSalleId(id : number) : Observable<Salle>{
    return this.httpClient.get<Salle>(`${this.baseUrl}/${id}`, { headers: this.getHeaders() });
  }
  updateSalle(id : number, salle: Salle):Observable<Object>{
    return this.httpClient.put<Salle>(`${this.baseUrl}/${id}`, salle, { headers: this.getHeaders() });
  }
  deleteSalle(id : number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { headers: this.getHeaders() });
  }
}
