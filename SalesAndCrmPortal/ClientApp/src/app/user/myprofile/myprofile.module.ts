import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyprofileRoutingModule } from './myprofile-routing.module';
import { MyprofileComponent } from './myprofile.component';
import { FamilymembersComponent } from './familymembers/familymembers.component';
import { MemberAddEditComponent } from './member-add-edit/member-add-edit.component';
import { AllMembersComponent } from './all-members/all-members.component';
import { PaymentsComponent } from './payments/payments.component';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { HealthCardComponent } from './health-card/health-card.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [MyprofileComponent, FamilymembersComponent, MemberAddEditComponent, AllMembersComponent, PaymentsComponent, AllQuotesComponent, HealthCardComponent, ChangePasswordComponent, EditProfileComponent],
  imports: [
    CommonModule,
    MyprofileRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class MyprofileModule { }
