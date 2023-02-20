import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HeroProductComponent } from './components/hero-product/hero-product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    ProductComponent,
    HeroProductComponent,
    ProductCardComponent,
    ProductListComponent,
  ],
  imports: [CommonModule, RouterModule, NgxSkeletonLoaderModule],
  exports: [ProductComponent],
})
export class ProductModule {}
