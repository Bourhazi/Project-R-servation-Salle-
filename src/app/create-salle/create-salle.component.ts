import { Component, OnInit } from '@angular/core';
import { Salle } from '../salle';
import { SalleService } from '../salle.service';
import { Router } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-create-salle',
  templateUrl: './create-salle.component.html',
  styleUrls: ['./create-salle.component.css']
})
export class CreateSalleComponent implements OnInit {
  salle : Salle = new Salle();
  categories : Categorie[] = [];
  selectedCategoryId !: number ;

  constructor(private categorieService : CategorieService , private salleservice : SalleService , private router:Router){
  }
  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(){
    this.categorieService.getCategoriesList().subscribe(data=>{
      this.categories=data;
    });
  }

  saveSalle(){
    this.salleservice.createSalle(this.salle).subscribe(data =>{
      console.log(data);
      this.getToSalle();
    },
    error=>console.log(error)
  );
  }


  getToSalle(){
    this.router.navigate(['/salles']);
  }

  Onsubmit() {
    console.log("Selected Category ID:", this.selectedCategoryId);
    const categoryId = Number(this.selectedCategoryId);
    const selectedCategory = this.categories.find(cat => cat.id === categoryId);
    if (selectedCategory) {
      this.salle.categorie = selectedCategory;
      this.saveSalle();
    } else {
      console.error('Category not selected properly');
    }
  }
}
