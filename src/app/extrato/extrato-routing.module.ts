import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {ExtratoComponent, ListarComponent} from './components';

export const ExtratoRoutes: Routes = [
    {
        path: 'extrato',
        component: ListarComponent,
        children: [{ path:'', component: ExtratoComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(ExtratoRoutes) ],
    exports: [ RouterModule ]
})

export class ExtratoRoutingModule {
}
