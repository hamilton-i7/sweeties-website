import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutModule as MatLayoutModule } from '@angular/cdk/layout';
import { ShareModule } from '../../share/share.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MatLayoutModule, ShareModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
