import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppRoutingModule } from './app-routing.modules';
import { MatIconModule } from '@angular/material/icon';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppLayoutModule } from './app-layout/app-layout.module';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    UserModule,
    AuthModule,
    AppLayoutModule
    // RouterModule.forRoot([

    // ])
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
