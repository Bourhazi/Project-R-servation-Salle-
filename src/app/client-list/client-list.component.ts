import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  clients!: Client[];
  search : any;

  constructor(private clientService : ClientService , private router:Router){
  }
  ngOnInit(): void {
    this.getClients();
  }

  private getClients(){
    this.clientService.getClientList().subscribe(data=>{
      this.clients=data;
    });
  }
}
