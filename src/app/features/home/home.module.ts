import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ShareModule } from '../../share/share.module';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    BenefitsComponent,
    ProductsComponent,
  ],
  imports: [CommonModule, ShareModule, RouterModule],
  exports: [HomeComponent],
})
export class HomeModule {}
