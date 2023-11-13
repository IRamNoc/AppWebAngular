export interface UsersI {
    nom:string;
    prenom?:string;
    id?:string;
    email:string;
    infos?:string;
    token?:string;
    statut:string;
}

export interface ContactI {
    nom:string;
    prenom:string;
    age?:number;
    email:string;
    statut:string;
    tel:string;
    mobile:string;
    adresse:AdresseI;
}

interface AdresseI {
    rue:string;
    codePostal:string;
    ville:string;
    pays:string;
}
