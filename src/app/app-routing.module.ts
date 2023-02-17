import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './features/buy/buy.component';
import { HomeComponent } from './features/home/home.component';
import { ProductComponent } from './features/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sweeties672 | Home' },
  {
    path: 'products',
    component: ProductComponent,
    title: 'Sweeties672 | Productos',
  },
  {
    path: 'buy',
    component: BuyComponent,
    title: 'Sweeties672 | Comprar ahora',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
