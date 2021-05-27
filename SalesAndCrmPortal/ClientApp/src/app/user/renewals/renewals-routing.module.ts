import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductRenewalsComponent } from './product-renewals/product-renewals.component';
import { RenewalsComponent } from './renewals.component';


const routes: Routes = [
  {
    path: '', component: RenewalsComponent,
    children: [
      { path: '', redirectTo: 'renewals', pathMatch: 'full' },
      { path: 'renewals', component: ProductRenewalsComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewalsRoutingModule { }
