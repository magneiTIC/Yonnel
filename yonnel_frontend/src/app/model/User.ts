import { SousAgence } from "./SousAgence";

export class User {
    id!:number;
    login!:string;
    password!:string;
    key!:string;
    sousAgence!:SousAgence;
}