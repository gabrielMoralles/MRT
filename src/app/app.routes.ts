import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrdensComponent } from './ordens/ordens.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { UserComponent } from './user/user.component';
import { OrdemComponent } from './ordem/ordem.component';
import { NovaOrdemComponent } from './nova-ordem/nova-ordem.component';
import { PrintComponent } from './print/print.component';

export const ROUTES: Routes = [

    {
        path: '',
        component: LoginComponent

    },
    {
        path: 'home',
        component: OrdensComponent
    },
    {
        path: 'produtos',
        component: ProdutosComponent
    },
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'ordem/:id',
        component: OrdemComponent
    },
    {
        path: 'nova-ordem',
        component: NovaOrdemComponent
    },
    {
        path: 'print/:id',
        component: PrintComponent
    }

]