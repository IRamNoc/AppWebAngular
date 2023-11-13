import { Injectable } from '@angular/core';
import { EvenementsI } from '../models/evenements-i';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  // liste partagée des événements
  listeEvenements:Array<EvenementsI> = [
    {nom:'Soiree Halloween', date:'17/04/2468', lieu:'VB', horaires:{debut:'18h', fin:'23h'}},
    {nom:'Soiree Noel', date:'24/12/2074', lieu:'École', horaires:{debut:'19h30', fin:'23h'}}
  ];

  constructor(private http:HttpClient) { 
    this.getEvenements();
  };

  // recevoir la liste des évènements
  // à la place de assets/data/evenements.json mettre une requête vers le serveur
  getEvenements() {
    this.http.get<Array<EvenementsI>>('assets/data/evenements.json').subscribe(
      {
        next:(ev) => {
          console.log('Données reçues du JSON, ev');
          this.listeEvenements = ev;
        },

        error:(er) => console.log(er),

        complete:() => console.log('les évènements ont été chargés')
      }
    );
  }

  /**
   * 
   * @param ev Evenement à envoyer au server
   */
  setEvenement(ev:EvenementsI) {
    this.http.post('assets/data/evenements.json', ev).subscribe();
  }
}
