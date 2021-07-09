import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { RecordsService } from './records.service';
import { Test2Component } from './test2/test2.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component'
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Test2Component,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbAlertModule,
    NgbPaginationModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'data',
        component: DataComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'logout',
        component: LogOutComponent
      },
      {
        path:'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      }
    ]),
    NgbModule
  ],
  providers: [RecordsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
