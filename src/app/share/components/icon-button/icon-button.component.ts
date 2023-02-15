import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  @Input() ariaLabel = '';
  @Output() btnClick = new EventEmitter<MouseEvent>();

  onClick(): void {
    this.btnClick.emit();
  }
}
