import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewalsRoutingModule } from './renewals-routing.module';
import { RenewalsComponent } from './renewals.component';
import { ProductRenewalsComponent } from './product-renewals/product-renewals.component';

@NgModule({
  declarations: [RenewalsComponent, ProductRenewalsComponent],
  imports: [
    CommonModule,
    RenewalsRoutingModule
  ]
})
export class RenewalsModule { }
