export class Paiement{
    id!: number;
    typePiece!:typePiece ;
    numPiece!: number;
    date!:Date;
}

enum typePiece{
    'passport',
    'cni',
    'permis'
}