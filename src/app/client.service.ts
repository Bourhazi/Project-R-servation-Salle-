import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl="http://localhost:8085/client"
  private baseUrllist="http://localhost:8085/clients"

  constructor(private httpClient : HttpClient, private authService: AuthService) {
  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  getClientForm():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  getClientList(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseUrllist}`, { headers: this.getHeaders() });
  }

}
