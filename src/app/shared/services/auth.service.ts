import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersI } from '../models/users-i';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authID:{id:string, mdp:string} = {id:'', mdp:''};
  profil!:UsersI;

  constructor(private http:HttpClient, private router:Router) {}

  authentification(){
    //doit appeler le fichier heidi@heidi64.json sachant que heidi est l'id saisi et heidi64 le mdp 
    //ca donnera une concat sur la requete http comme celle-ci : 'assets/data/ids/${this.authID.id}@${this.authID.mdp}.json'
    this.http.get<UsersI>('assets/data/ids/${this.authID.id}@${this.authID.mdp}.json').subscribe(
      {
        next:p => {
          this.profil = p,
          this.router.navigateByUrl('/')
        },

        error:(er) => {
          console.log(er),
          this.router.navigateByUrl('/toto')

        },

        complete:() => console.log('profil géchar')
      }
    );
  }
}
