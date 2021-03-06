import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
// Datatable
import { DataTablesModule } from "angular-datatables";
// HttpClientModule
import { HttpClientModule } from '@angular/common/http';
// CookieService
import { CookieService } from 'ngx-cookie-service';
// SweeetAlert2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DataTablesModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  exports: [
    DataTablesModule,
    SweetAlert2Module
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
