import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrdensComponent } from './ordens/ordens.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { UserComponent } from './user/user.component';

export const ROUTES: Routes=[

    {
        path:'',
        component:LoginComponent

    },
    {
        path:'home',
        component:OrdensComponent
    },
    {
        path:'produtos',
        component:ProdutosComponent
    },
    {
        path:'users',
        component:UserComponent
    }


]