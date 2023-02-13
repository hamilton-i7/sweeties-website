import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutModule as MatLayoutModule } from '@angular/cdk/layout';
import { ShareModule } from '../../share/share.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatLayoutModule, ShareModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
