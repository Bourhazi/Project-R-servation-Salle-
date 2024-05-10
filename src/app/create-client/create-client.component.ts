import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ReservationService } from '../reservation.service';
import { Client } from '../client';
import { Reservation } from '../reservation';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage-service.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  successMessage: string = '';
  erroemessage : string ='';
  client: Client = new Client();
  reservation: Reservation = new Reservation();
  sessionAttributes !: object;

  constructor(private reservationService: ReservationService ,private router:Router , private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  submitClient(): void {
    this.reservationService.AddClientAndReservation(this.client, this.reservation).subscribe(
      data => {
        console.log("Client and reservation added successfully", data);
        this.localStorageService.set('successMessage', 'Client and reservation added successfully');
        this.router.navigate(['create-reservation']);
      },
      error => {
        console.error("Error adding client and reservation", error);
        this.erroemessage = 'Client and reservation does not added good !';
      }
    );
  }

  }
