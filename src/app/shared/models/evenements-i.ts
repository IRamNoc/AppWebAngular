export interface EvenementsI {
    nom:string;
    date:string;
    lieu:string;
    horaires:HorairesI;
}

interface HorairesI {
    debut:string;
    fin:string;
}
