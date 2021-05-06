import { BrowserModule } from '@angular/platform-browser';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SaldosComponent, ListarComponent } from './components';




@NgModule({
  declarations: [SaldosComponent, ListarComponent,
    ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]

})
export class SaldoModule { }
