import { Categorie } from "./categorie";

export class Salle {
  id !: number;
  name ! : string ;
  prix! : number;
  categorie  : Categorie

  constructor() {
    this.categorie = new Categorie();
  }

}
