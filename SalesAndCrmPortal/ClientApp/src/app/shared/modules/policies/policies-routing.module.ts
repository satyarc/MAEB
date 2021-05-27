import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ClaimsPolicyComponent } from './claims-policy/claims-policy.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
const routes: Routes = [
  {path: 'terms&conditions', component: TermsConditionsComponent},
  {path: 'privacy-policy', component: PrivatePolicyComponent},
  {path: 'claims', component: ClaimsPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
