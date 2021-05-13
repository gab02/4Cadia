import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table';

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
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]

})
export class SaldoModule { }
