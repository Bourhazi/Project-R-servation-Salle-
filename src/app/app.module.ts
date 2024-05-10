import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { CreateSalleComponent } from './create-salle/create-salle.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SalleListComponent } from './salle-list/salle-list.component';
import { UpdateSalleComponent } from './update-salle/update-salle.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ClientListComponent } from './client-list/client-list.component';
//import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CategorieListComponent,
    CreateCategorieComponent,
    UpdateCategorieComponent,
    CreateReservationComponent,
    CreateClientComponent,
    FilterPipe,
    LoginComponent,
    CreateSalleComponent,
    SalleListComponent,
    UpdateSalleComponent,
    ReservationListComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
