export class Agence{
    id!:number;
    nom!:string;
    balance!:number;
    statut!:statut;
}
enum statut{
    'actif',
    'inactif'
}
