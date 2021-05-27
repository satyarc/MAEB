import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyprofileComponent } from './myprofile.component';
import { FamilymembersComponent } from './familymembers/familymembers.component';
import { MemberAddEditComponent } from './member-add-edit/member-add-edit.component';
import { AllMembersComponent } from './all-members/all-members.component';
import { PaymentsComponent } from './payments/payments.component';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { HealthCardComponent } from './health-card/health-card.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  {path: 'profile', component: MyprofileComponent,
  children: [
    {path: '', redirectTo: "family-members"},
    {path: 'family-members', component: FamilymembersComponent},
    {path: 'family-members/edit-family-members', component: MemberAddEditComponent},
    {path: 'family-members/add-family-members', component: MemberAddEditComponent},
    {path: 'all-family-members', component: AllMembersComponent},
    {path: 'payments', component: PaymentsComponent},
    {path: 'quotes', component: AllQuotesComponent},
    {path: 'health-card', component: HealthCardComponent},
    {path: 'change-password', component: ChangePasswordComponent},
    {path: 'edit-profile', component: EditProfileComponent},
  ]}
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyprofileRoutingModule { }
