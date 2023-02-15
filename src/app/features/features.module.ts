import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';

@NgModule({
  imports: [CommonModule, LayoutModule, HomeModule, ProductModule],
  exports: [LayoutModule, HomeModule, ProductModule],
})
export class FeaturesModule {}
