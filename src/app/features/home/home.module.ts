import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ShareModule } from '../../share/share.module';

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  imports: [CommonModule, ShareModule],
  exports: [HomeComponent],
})
export class HomeModule {}
