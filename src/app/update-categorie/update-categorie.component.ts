import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../categorie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit{

  id! : number
  categorie : Categorie = new Categorie();
  constructor(private categorieService : CategorieService , private route : ActivatedRoute , private router : Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.categorieService.getCategorieId(this.id).subscribe(data=>{
      this.categorie = data;
    }, error=>console.log(error));
  }

  public updateCategory(){
    this.categorieService.updateCategorie(this.id,this.categorie).subscribe(data=>{
      console.log(data);
      this.getToCategorie();
    }, error=>console.log(error));

  }
  getToCategorie(){
    this.router.navigate(['/categories']);
  }

}
