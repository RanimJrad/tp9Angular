import { Component, OnInit } from '@angular/core';
import { SuperMarket } from '../model/supermarket.model';
import { Type } from '../model/type.model';
import { SupermarketService } from '../supermarket.service';
import { SupermarketComponent } from '../supermarket/supermarket.component';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
})
export class RechercheParTypeComponent implements OnInit {
  idType!: number;
  Types!: Type[];
  Supermarket! : SuperMarket[];

  constructor(private supermarketService : SupermarketService ){}

  ngOnInit(): void {
    this.Types = this.supermarketService.listetypes(); 
    console.log(this.Types);
  }

  
    onChange() {
      this.Supermarket = this.supermarketService.rechercheParType(this.idType);
      }
  }

