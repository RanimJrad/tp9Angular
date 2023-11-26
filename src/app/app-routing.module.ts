import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { AddComponent } from './add/add.component';
import { UpdateSupermarketComponent } from './update-supermarket/update-supermarket.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { superGuard } from './super.guard';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [{path: "supermarket", component : SupermarketComponent},
{path: "add", component : AddComponent, canActivate:[superGuard]},
{path: "updateSupermarket/:id", component: UpdateSupermarketComponent},
{path: "", redirectTo: "supermarket", pathMatch: "full" },
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path: "rechercheParType", component : RechercheParTypeComponent },
{path: "rechercheParNom", component : RechercheParNomComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
