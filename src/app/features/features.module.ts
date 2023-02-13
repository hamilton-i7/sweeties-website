import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, HomeModule],
  exports: [LayoutModule, HomeModule],
})
export class FeaturesModule {}
