import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from '../local-storage-service.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})

export class CreateReservationComponent implements OnInit {

  categories : Categorie[] = [];
  reservation : Reservation = new Reservation();;
  selectedCategoryId !: number ;
  hasError: boolean = false;
  errorMessage: string = "";
  successMessage: string = '';
  dateError: boolean = false;
  dateErrorMessage: string = "";



  constructor(private categorieService : CategorieService ,private  reservationService : ReservationService , private router:Router , private localStorageService: LocalStorageService){}

  ngOnInit(): void {
    this.getCategories();

    this.successMessage = this.localStorageService.get('successMessage');
    this.localStorageService.remove('successMessage');
  }

  private getCategories(){
    this.categorieService.getCategoriesList().subscribe(data=>{
      this.categories=data;
      //console.log(this.categories.length)
    });
  }

  saveReservation(){
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const arrivalDate = new Date(this.reservation.date_debut).getTime();
    const departureDate = new Date(this.reservation.date_fin).getTime();

    if (arrivalDate < currentDate || departureDate < currentDate) {
      this.dateError = true;
      this.dateErrorMessage = "Dates must not be in the past.";
      return;
    }
    if (departureDate <= arrivalDate) {
      this.dateError = true;
      this.dateErrorMessage = "Departure date must be after arrival date.";
      return;
    }
      this.reservationService.AddReservation(this.reservation.date_fin,this.reservation.date_debut,this.selectedCategoryId)
      .subscribe({
        next: (data) => {
          if (data === null) {
            this.hasError = true;
            this.errorMessage = "La chambre est déjà réservée pour ces dates. Veuillez choisir d'autres dates.";
          } else {
            console.log(data);
            this.reservationService.reservationDetails = data;
            this.goToClient(); // Navigate away only if the reservation is successful
          }
        },
        error: (error: HttpErrorResponse) => {
          console.log('Error:', error.message);
          this.hasError = true;
          this.errorMessage = "La chambre est déjà réservée pour ces dates. Veuillez choisir d'autres dates.";
        }
      }
    );
  }


  goToClient(){
    this.router.navigate(['create-client'])
  }

}
