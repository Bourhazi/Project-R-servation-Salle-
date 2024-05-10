import { Component } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {

  reservations!: Reservation[];
  search : any;

  constructor(private reservationService : ReservationService , private router:Router){
  }
  ngOnInit(): void {
    this.getReservation();
  }

  private getReservation(){
    this.reservationService.getReservationList().subscribe(data=>{
      this.reservations=data;
    });
  }

convertirTimestampEnDate(timestamp: number): Date {
  return new Date(timestamp);
}


}
