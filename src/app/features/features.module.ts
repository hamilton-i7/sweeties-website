import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [CommonModule, LayoutModule, HomeModule],
  exports: [LayoutModule, HomeModule],
})
export class FeaturesModule {}
