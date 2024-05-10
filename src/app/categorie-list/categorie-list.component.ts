import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit{
  categories!: Categorie[];
  search : any;

  constructor(private categorieService : CategorieService , private router:Router){

  }
  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(){
    this.categorieService.getCategoriesList().subscribe(data=>{
      this.categories=data;
    });
  }

  updateCategory(id: number){
    this.router.navigate(['update-categorie', id])
  }
  deleteCategory(id : number){
    this.categorieService.deleteCategorie(id).subscribe(data=>{
      console.log(data);
     this.getCategories();
    }, error=>console.log(error));
  }
}
