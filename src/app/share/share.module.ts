import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilledButtonComponent } from './components/filled-button/filled-button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';

@NgModule({
  declarations: [FilledButtonComponent, IconButtonComponent],
  imports: [CommonModule],
  exports: [FilledButtonComponent, IconButtonComponent],
})
export class ShareModule {}
