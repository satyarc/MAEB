import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';


const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      },
      {
        path: '',
        loadChildren: () => import('../agent/agent.module').then(m => m.AgentModule)
      },
      {
        path: '',
        loadChildren: () => import('../shared/modules/web/web.module').then(m => m.WebModule)
      },
      {
        path: '',
        loadChildren: () => import('../shared/modules/policies/policies.module').then(m => m.PoliciesModule)
      },
      {
        path: '',
        loadChildren: () => import('../shared/modules/products/products.module').then(m => m.ProductsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
