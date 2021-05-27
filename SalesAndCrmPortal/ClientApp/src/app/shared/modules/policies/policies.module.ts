import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ClaimsPolicyComponent } from './claims-policy/claims-policy.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';


@NgModule({
  declarations: [TermsConditionsComponent, ClaimsPolicyComponent, PrivatePolicyComponent],
  imports: [
    CommonModule,
    PoliciesRoutingModule
  ]
})
export class PoliciesModule { }
