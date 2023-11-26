import { Injectable } from '@angular/core';
import { SuperMarket } from './model/supermarket.model';
import { Type } from './model/type.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupermarketService {
  Supermarket: SuperMarket[];
  super!: SuperMarket;
  types: Type[];
  constructor() {
    this.types = [
      { idtype: 1, nomtype: 'hypermarche' },
      { idtype: 2, nomtype: 'supermarche' },
      { idtype: 3, nomtype: 'superette' },
    ];

    this.Supermarket = [
      {
        idSuperMarket: 1,
        nomSuperMarket: 'Carrefour',
        localisationSuperMarket: 'Avenue Habib Thameur,Nabeul',
        dateCreation: new Date('01/14/2011'),
        type: { idtype: 1, nomtype: 'hypermarche' },
      },
      {
        idSuperMarket: 2,
        nomSuperMarket: 'Monoprix',
        localisationSuperMarket: ' Avenue Habib Bourguiba,Nabeul',
        dateCreation: new Date('12/17/2010'),
        type: { idtype: 2, nomtype: 'supermarche' },
      },
      {
        idSuperMarket: 3,
        nomSuperMarket: 'Mg',
        localisationSuperMarket: 'Rue Ali Belhouane,Nabeul',
        dateCreation: new Date('02/20/2020'),
        type: { idtype: 2, nomtype: 'supermarche' },
      },
    ];
  }

  listeSupermarkets(): SuperMarket[] {
    return this.Supermarket;
  }

  ajouter(prod: SuperMarket) {
    this.Supermarket.push(prod);
  }

  supprimer(prod: SuperMarket) {
    const index = this.Supermarket.indexOf(prod, 0);
    if (index > -1) {
      this.Supermarket.splice(index, 1);
    }
  }

  consulter(id: number): SuperMarket {
    this.super = this.Supermarket.find((p) => p.idSuperMarket == id)!;
    return this.super;
  }

  trier() {
    this.Supermarket = this.Supermarket.sort((n1, n2) => {
      if (n1.idSuperMarket! > n2.idSuperMarket!) {
        return 1;
      }
      if (n1.idSuperMarket! < n2.idSuperMarket!) {
        return -1;
      }
      return 0;
    });
  }

  update(s: SuperMarket) {
    this.supprimer(s);
    this.ajouter(s);
    this.trier();
  }

  listetypes():Type[] {
    return this.types;
  }

  consultertype(id:number): Type{
    return this.types.find(type => type.idtype == id)!;
    }

    rechercheParType( id:number): SuperMarket[]{
        const filteredSupermarkets = this.Supermarket.filter((supermarket) => supermarket.type.idtype == id);
        return filteredSupermarkets;
      }
     }
