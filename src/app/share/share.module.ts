import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilledButtonComponent } from './components/filled-button/filled-button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { FilledLinkComponent } from './components/filled-link/filled-link.component';

@NgModule({
  declarations: [
    FilledButtonComponent,
    IconButtonComponent,
    TextFieldComponent,
    FilledLinkComponent,
  ],
  imports: [CommonModule],
  exports: [
    FilledButtonComponent,
    IconButtonComponent,
    TextFieldComponent,
    FilledLinkComponent,
  ],
})
export class ShareModule {}
