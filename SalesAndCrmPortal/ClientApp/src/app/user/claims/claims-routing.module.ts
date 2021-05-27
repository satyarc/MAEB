import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsSectionComponent } from './claims-section.component';
import { ClaimsComponent } from './claims/claims.component';
import { RaisenewclaimComponent } from './raisenewclaim/raisenewclaim.component';


const routes: Routes = [
  {
    path: '', component: ClaimsSectionComponent,
    children: [
      { path: '', redirectTo: 'claims', pathMatch: 'full' },
      { path: 'claims', component: ClaimsComponent },
      { path: 'claims/new-claims', component: RaisenewclaimComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule { }
