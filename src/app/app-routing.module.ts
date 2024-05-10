import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { LoginComponent } from './login/login.component';
import { CreateSalleComponent } from './create-salle/create-salle.component';
import { AuthGuardService } from './auth-guard.service';
import { SalleListComponent } from './salle-list/salle-list.component';
import { UpdateSalleComponent } from './update-salle/update-salle.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  {path:'categories'  , component:CategorieListComponent},
  {path:'create-categorie' , canActivate: [AuthGuardService] ,component:CreateCategorieComponent},
  {path:'update-categorie/:id' , canActivate: [AuthGuardService] ,component:UpdateCategorieComponent},
  {path:'create-reservation' , component:CreateReservationComponent},
  {path:'reservations' , canActivate: [AuthGuardService] , component:ReservationListComponent},
  {path:'create-client' , component:CreateClientComponent},
  {path:'clients' , canActivate: [AuthGuardService] , component:ClientListComponent},
  {path:'create-login' , component:LoginComponent},
  {path:'create-salle' , canActivate: [AuthGuardService] , component:CreateSalleComponent},
  {path:'salles' , canActivate: [AuthGuardService] , component:SalleListComponent},
  {path:'update-salle/:id' , canActivate: [AuthGuardService] ,component:UpdateSalleComponent},
  {path:'' , redirectTo:'create-login' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
