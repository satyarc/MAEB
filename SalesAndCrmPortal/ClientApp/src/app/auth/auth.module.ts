import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountCreatedComponent } from './account-created/account-created.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  declarations: [LoginComponent, OtpComponent, CreateAccountComponent, AccountCreatedComponent, ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ]
})
export class AuthModule { }
