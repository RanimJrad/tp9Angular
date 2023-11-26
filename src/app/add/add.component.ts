import { Component } from '@angular/core';
import { SuperMarket } from '../model/supermarket.model';
import { SupermarketService } from '../supermarket.service';
import { Router } from '@angular/router';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newSupermarket = new SuperMarket();
  types! : Type[];
  newIdtype! : number;
  newtype! : Type;

  constructor(private SupermarketService: SupermarketService,
    private router :Router,){}

    ngOnInit(){
      this.types = this.SupermarketService.listetypes();
    }
  
  add(){
    //console.log(this.newSupermarket);
    this.newtype =this.SupermarketService.consultertype(this.newIdtype);
    this.newSupermarket.type = this.newtype;
    this.SupermarketService.ajouter(this.newSupermarket);
    this.router.navigate(['supermarket']);

  }

}
