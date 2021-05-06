import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent, LogarComponent } from './components';
import { HttpClientModule } from '@angular/common/http';


import { LoginService } from './services';
@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
