import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle } from '../salle';
import { SalleService } from '../salle.service';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-update-salle',
  templateUrl: './update-salle.component.html',
  styleUrls: ['./update-salle.component.css']
})
export class UpdateSalleComponent implements OnInit {
  salle: Salle = new Salle();
  categories: Categorie[] = [];
  id!: number;

  constructor(
    private salleService: SalleService,
    private categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadSalle();
    this.getCategories();
  }

  private loadSalle() {
    this.salleService.getSalleId(this.id).subscribe(data => {
      this.salle = data;
      if (!this.salle.categorie) {
        this.salle.categorie = new Categorie();
      }
    }, error => console.error('Error: could not load salle', error));
  }

  private getCategories() {
    this.categorieService.getCategoriesList().subscribe(data => {
      this.categories = data;
    }, error => console.error('Error: could not load categories', error));
  }

  onSubmit() {
    this.salleService.updateSalle(this.id, this.salle).subscribe(data => {
      console.log('Salle updated successfully');
      this.router.navigate(['/salles']);
    }, error => console.error('Failed to update salle', error));
  }
}
