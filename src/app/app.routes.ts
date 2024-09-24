import { Routes } from '@angular/router';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { KitchenPageComponent } from './components/KitchenPage/KitchenPage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: OrderPageComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/KitchenPage/KitchenPage.component').then(
            (file) => file.KitchenPageComponent
          ),
      },
      {
        path: 'toto',
        component: OrderPageComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
