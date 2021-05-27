import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';



const routes: Routes = [
  {path: 'user', component: UserComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./myprofile/myprofile.module').then(m => m.MyprofileModule)
    },
    {
      path: '',
      loadChildren: () => import('./claims/claims.module').then(m => m.ClaimsModule)
    },
    {
      path: '',
      loadChildren: () => import('./renewals/renewals.module').then(m => m.RenewalsModule)
    },
    {
      path: '',
      loadChildren: () => import('./myoffers/myoffers.module').then(m => m.MyoffersModule)
    },
    {
      path: '',
      loadChildren: () => import('./support/support.module').then(m => m.SupportModule)
    },
    // {
    //   path: '',
    //   loadChildren: () => import('./allproducts/allproducts.module').then(m => m.AllproductsModule)
    // },
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
export class UserRoutingModule { }
