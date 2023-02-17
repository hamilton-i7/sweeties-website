import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { BuyModule } from './buy/buy.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    HomeModule,
    ProductModule,
    BuyModule,
  ],
  exports: [LayoutModule, HomeModule, ProductModule, BuyModule],
})
export class FeaturesModule {}
