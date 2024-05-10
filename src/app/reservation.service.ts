import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Categorie } from './categorie';
import { Client } from './client';
import { Reservation } from './reservation';
import { AuthService } from './auth.service'; // Make sure AuthService is imported

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = "http://localhost:8085/submitReservation";
  private baseUrl2 = "http://localhost:8085/submitClient";
  private baseUrl3 = "http://localhost:8085/reservations";

  constructor(private httpClient: HttpClient, private authService: AuthService) { } 

  reservationDetails: any;
  client = new Client();

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  AddReservation(date_fin: Date, date_debut: Date, categorieId: number): Observable<Object> {
    const body = {
      date_fin: date_fin,
      date_debut: date_debut,
      categorieId: categorieId
    };
    return this.httpClient.post(`${this.baseUrl}`, body).pipe(
      tap((data) => {
        this.reservationDetails = data;
      }),
      catchError(error => {
        console.error('Error in AddReservation:', error);
        return throwError(() => new Error('Failed to add reservation. Please try again.'));
      })
    );
  }

  AddClientAndReservation(client: Client, reservation: Reservation): Observable<Object> {
    reservation.date_debut = this.reservationDetails.date_debut;
    reservation.date_fin = this.reservationDetails.date_fin;
    reservation.salle = this.reservationDetails.salles;
    const body = {
      client: client,
      reservation: reservation
    };
    return this.httpClient.post(`${this.baseUrl2}`, body);
  }

  getReservationList():Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(`${this.baseUrl3}` , { headers: this.getHeaders() });
  }
}
