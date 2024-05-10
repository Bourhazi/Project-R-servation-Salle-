import { Component, OnInit } from '@angular/core';
import { SalleService } from '../salle.service';
import { Router } from '@angular/router';
import { Salle } from '../salle';

@Component({
  selector: 'app-salle-list',
  templateUrl: './salle-list.component.html',
  styleUrls: ['./salle-list.component.css']
})
export class SalleListComponent implements OnInit{

  salles!: Salle[];
  search : any;

  constructor(private salleService : SalleService , private router:Router){

  }
  ngOnInit(): void {
    this.getSalles();
  }

  private getSalles(){
    this.salleService.getSallesList().subscribe(data=>{
      this.salles=data;
    });
  }

updateSalle(id: number){
    this.router.navigate(['update-salle', id])
  }
  deleteSalle(id : number){
    this.salleService.deleteSalle(id).subscribe(data=>{
      console.log(data);
     this.getSalles();
    }, error=>console.log(error));
  }

}
