import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutModule as MatLayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatLayoutModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
