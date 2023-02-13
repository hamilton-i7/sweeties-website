import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filled-button',
  templateUrl: './filled-button.component.html',
  styleUrls: ['./filled-button.component.scss'],
})
export class FilledButtonComponent {
  @Input() label = '';
  @Input() darkVariant = false;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
