import { Component, OnInit } from '@angular/core';
import { SuperMarket } from '../model/supermarket.model';
import { SupermarketService } from '../supermarket.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent {

  searchTerm!: string;
  Supermarket! : SuperMarket[];
  

  constructor(private supermarketService : SupermarketService){}

  ngOnInit(){
    this.Supermarket = this.supermarketService.listeSupermarkets();
    console.log(this.Supermarket);
  }

}