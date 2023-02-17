import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import { RouterModule } from '@angular/router';
import { HeroBuyComponent } from './components/hero-buy/hero-buy.component';
import { ShareModule } from '../../share/share.module';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [BuyComponent, HeroBuyComponent, LocationComponent],
  imports: [CommonModule, RouterModule, ShareModule],
  exports: [BuyComponent],
})
export class BuyModule {}
