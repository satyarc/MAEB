import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SupportComponent } from './support.component';

const routes: Routes = [
  {path: 'support-help', component: SupportComponent,
  children: [
  {path: '', redirectTo: 'ticket', pathMatch: 'full'},
  {path: 'ticket', component: TicketComponent},
  {path: 'ticket/raise-ticket', component: RaiseticketComponent},
  {path: 'contact-us', component: ContactUsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
