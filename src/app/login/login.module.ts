import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent, LogarComponent } from './components';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { LoginService } from './services';
@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
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
