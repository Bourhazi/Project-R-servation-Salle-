import { Categorie } from "./categorie";
import { Client } from "./client";
import { Salle } from "./salle";

export class Reservation {
  id! : number;
  date_debut ! : Date ;
  date_fin ! : Date;
  salle !: Salle;
  client ! : Client;
}

