import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService , private  router : Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password)
      .pipe(
        catchError(error => {
          this.errorMessage = 'Login failed. Please check your credentials.';
          return of(null);
        })
      )
      .subscribe(response => {
        if (response && response.token) {
          this.authService.setToken(response.token);
          console.log(this.authService.getToken());
          this.goToCategorie()
        }
      });
  }

  goToCategorie(){
    this.router.navigate(['categories'])
  }
  
}
