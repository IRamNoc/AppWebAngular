import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Formulaire soumis !');
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);
  }
}
