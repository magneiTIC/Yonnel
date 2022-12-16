import {Client}  from './Client';
import { Devise } from './Devise';
import { Paiement } from './Paiement';
import { User } from './User';

enum statut{
    'paid',
    'canceled',
    'transmissed',
    'payable'
}

export class Transaction{
    id!: number;
    montantRec!:number;
    statut!:statut;
    clientEmetteur!:Client;
    clientRecepteur!:Client;
    deviseOri!:Devise;
    deviseDest!:Devise;
    paiement!:Paiement;
    userEmetteur!:User;
    userRecepteur!:User;

}