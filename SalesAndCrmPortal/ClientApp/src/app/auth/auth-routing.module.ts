import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountCreatedComponent } from './account-created/account-created.component';


const routes: Routes = [
   {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'otp', component: OtpComponent},
  {path: 'create_account', component:CreateAccountComponent },
  {path: 'account_created', component: AccountCreatedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
