import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyoffersComponent } from './myoffers.component';
import { OffersComponent } from './offers/offers.component';


const routes: Routes = [
  {
    path: '', component: MyoffersComponent,
    children: [
      { path: '', redirectTo: 'offers', pathMatch: 'full' },
      { path: 'offers', component: OffersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyoffersRoutingModule { }
