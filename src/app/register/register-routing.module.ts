import { RegisterComponent } from './components/register.component';
import { CrudComponent } from './components/crud/crud.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



export const RegisterRoutes: Routes = [
  {
      path: 'register',
      component: CrudComponent,
      children: [
          {
              path: '',
              component: RegisterComponent
          }
      ]
  }
];

@NgModule({
  imports:[ RouterModule.forChild(RegisterRoutes) ],
  exports: [ RouterModule ]
})

export class RegisterRoutingModule { }
