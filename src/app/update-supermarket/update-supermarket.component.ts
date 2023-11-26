import { Component, OnInit } from '@angular/core';
import { SuperMarket } from '../model/supermarket.model';
import { SupermarketService } from '../supermarket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-supermarket',
  templateUrl: './update-supermarket.component.html',
})
export class UpdateSupermarketComponent implements OnInit{

  currentSupermarket= new SuperMarket();
  types! : Type[];
  updatedTypeId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private SupermarketService: SupermarketService,
    private router :Router) { }

  ngOnInit() {
    this.types = this.SupermarketService.listetypes();
    this.currentSupermarket = this.SupermarketService.consulter(this.activatedRoute.snapshot. params['id']);
    this.updatedTypeId=this.currentSupermarket.type.idtype;
    //console.log(this.currentSupermarket);
    
  }
  updateSupermarket(){
    this.currentSupermarket.type=this.SupermarketService.consultertype(this.updatedTypeId);
    this.SupermarketService.update(this.currentSupermarket);
    this.router.navigate(['supermarket']);
    }

}
