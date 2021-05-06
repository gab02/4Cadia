import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExtratoComponent, ListarComponent } from './components';
import { HttpClientModule } from '@angular/common/http';


import { ExtratoService } from './services';
@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    ExtratoComponent,
    ListarComponent
  ],
  providers: [
    ExtratoService
  ]
})
export class ExtratoModule { }
