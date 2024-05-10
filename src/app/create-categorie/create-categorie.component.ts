import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit{

  categorie : Categorie = new Categorie();

  constructor(private categoryService : CategorieService , private router:Router){
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  saveCategory(){
    this.categoryService.createCategory(this.categorie).subscribe(data =>{
      console.log(data);
      this.getToCategorie();
    },
    error=>console.log(error)
  );
  }

  getToCategorie(){
    this.router.navigate(['/categories']);
  }
  Onsubmit(){
    console.log(this.categorie);
    this.saveCategory();
  }
}
