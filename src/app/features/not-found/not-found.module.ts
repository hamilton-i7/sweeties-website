import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { ShareModule } from '../../share/share.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, ShareModule],
})
export class NotFoundModule {}
