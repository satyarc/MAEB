import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { ClaimsComponent } from './claims/claims.component';
import { RaisenewclaimComponent } from './raisenewclaim/raisenewclaim.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaimsSectionComponent } from './claims-section.component';

@NgModule({
  declarations: [ClaimsComponent, RaisenewclaimComponent, ClaimsSectionComponent],
  imports: [
    CommonModule,
    ClaimsRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
 
    MatDatepickerModule
  
  ]
})
export class ClaimsModule { }
