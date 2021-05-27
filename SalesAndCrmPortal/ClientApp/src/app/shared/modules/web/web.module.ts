import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { AboutComponent } from './about/about.component';
import { BusinessPartnersComponent } from './business-partners/business-partners.component';
import { SalesPartnersComponent } from './sales-partners/sales-partners.component';
import { MicroFinanceComponent } from './micro-finance/micro-finance.component';
import { HelpFaqComponent } from './help-faq/help-faq.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [WebComponent, AboutComponent, BusinessPartnersComponent, SalesPartnersComponent, MicroFinanceComponent, HelpFaqComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    MatExpansionModule
  ]
})
export class WebModule { }
