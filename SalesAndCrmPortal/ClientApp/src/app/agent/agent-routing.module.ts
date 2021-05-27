import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './agent.component';


const routes: Routes = [
  {path: 'agent', component: AgentComponent,

  // children: [
  //   {path: '', redirectTo: 'terms&conditions', pathMatch: 'full'},
  //   {
  //     path: '',
  //     loadChildren: () => import('../shared/modules/policies/policies.module').then(m => m.PoliciesModule)
  //   }
  // ]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
