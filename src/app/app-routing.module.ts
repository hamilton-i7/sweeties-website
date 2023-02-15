import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductComponent } from './features/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sweeties672 | Home' },
  {
    path: 'productos',
    component: ProductComponent,
    title: 'Sweeties672 | Productos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
