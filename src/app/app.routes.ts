import { Routes } from '@angular/router';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { KitchenPageComponent } from './components/KitchenPage/KitchenPage.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: OrderPageComponent
        },
        {
            path: 'admin',
            component: KitchenPageComponent
            },
        {
            path: '**',
            redirectTo: 'home',
            pathMatch: 'full'
            }
];