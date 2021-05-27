import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyoffersRoutingModule } from './myoffers-routing.module';
import { MyoffersComponent } from './myoffers.component';
import {MatTabsModule} from '@angular/material/tabs';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [MyoffersComponent, OffersComponent],
  imports: [
    CommonModule,
    MyoffersRoutingModule,
    MatTabsModule
  ]
})
export class MyoffersModule { }
