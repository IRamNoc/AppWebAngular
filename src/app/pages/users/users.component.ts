import { Component } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  listeUsers:Array<any> = [
    {nom:'Doe', prenom:'John', email:'doejoe@gmail.com',statut:'user'},
    {nom:'Doe', prenom:'Jane', email:'doejane@gmail.com',statut:'user'},
    {nom:'Doe', prenom:'Jack', email:'doejack@gmail.com',statut:'admin'}
  ];
}
