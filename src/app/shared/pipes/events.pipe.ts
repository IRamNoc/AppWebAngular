import { Pipe, PipeTransform } from '@angular/core';
import { EvenementsI } from '../models/evenements-i';

@Pipe({
  name: 'events'
})
export class EventsPipe implements PipeTransform {

  transform(listeEvents:Array<EvenementsI>, filtre:string): Array<EvenementsI>{
    console.log("Pipe");
    return listeEvents.filter(event => event.nom.toLowerCase().indexOf(filtre) > -1)
  }

}
