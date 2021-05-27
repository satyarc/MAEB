import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from '../web/home/home.module';
import { AboutComponent } from './about/about.component';
import { BusinessPartnersComponent } from './business-partners/business-partners.component';
import { HelpFaqComponent } from './help-faq/help-faq.component';
import { MicroFinanceComponent } from './micro-finance/micro-finance.component';
import { SalesPartnersComponent } from './sales-partners/sales-partners.component';
import { WebComponent } from './web.component';


const routes: Routes = [
  {
    path: '', component: WebComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('../web/home/home.module').then(m=>m.HomeModule)
      },
       {path: 'about', component: AboutComponent},
       {path: 'business-partners', component: BusinessPartnersComponent},
       {path: 'micro-finance', component: MicroFinanceComponent},
       {path: 'sales-partners', component: SalesPartnersComponent},
       {path: 'help&faq', component: HelpFaqComponent},
       {
        path: '',
        loadChildren: ()=> import('../products/products.module').then(m=>m.ProductsModule)
      },
    ]

  },
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
