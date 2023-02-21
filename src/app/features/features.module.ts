import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { BuyModule } from './buy/buy.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  exports: [LayoutModule, HomeModule, ProductModule, BuyModule, NotFoundModule],
})
export class FeaturesModule {}
