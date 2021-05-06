import { BrowserModule } from '@angular/platform-browser';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent, CrudComponent } from './components';




@NgModule({
  declarations: [RegisterComponent, CrudComponent,
    ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]

})
export class RegisterModule { }
