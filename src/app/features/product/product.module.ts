import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HeroProductComponent } from './components/hero-product/hero-product.component';

@NgModule({
  declarations: [ProductComponent, HeroProductComponent],
  imports: [CommonModule],
  exports: [ProductComponent],
})
export class ProductModule {}
