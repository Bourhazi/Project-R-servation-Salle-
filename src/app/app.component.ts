import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Salle-Front-web';

  constructor(private authservice : AuthService ,private router : Router){}

  ngOnInit(): void {

  }

  logout(){
    this.authservice.logout();
    this.goToLogin();
  }

  goToLogin(){
    this.router.navigate(['create-login'])
  }

}
