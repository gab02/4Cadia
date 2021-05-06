import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {ListarComponent, SaldosComponent} from './components';

export const SaldoRoutes: Routes = [
    {
        path: 'saldo',
        component: ListarComponent,
        children: [
            {
                path: '',
                component: SaldosComponent
            }
        ]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(SaldoRoutes) ],
    exports: [ RouterModule ]
})


export class SaldoRoutingModule { }
