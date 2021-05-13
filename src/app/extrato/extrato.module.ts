import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExtratoComponent, ListarComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import { ExtratoService } from './services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],


  declarations: [
    ExtratoComponent,
    ListarComponent
  ],
  providers: [
    ExtratoService
  ]
})
export class ExtratoModule { }
