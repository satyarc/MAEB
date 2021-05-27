import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TicketComponent } from './ticket/ticket.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SupportComponent } from './support.component';


@NgModule({
  declarations: [SupportComponent, TicketComponent, RaiseticketComponent, ContactUsComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ]
})
export class SupportModule { }
