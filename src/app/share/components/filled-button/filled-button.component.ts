import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filled-button',
  templateUrl: './filled-button.component.html',
})
export class FilledButtonComponent {
  @Input() href?: string;
  @Input() newTab = false;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
