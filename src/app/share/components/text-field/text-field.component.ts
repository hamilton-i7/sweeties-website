import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter();
  @Input() placeholder = '';
  @Input() error = false;

  onValueChange(value: string): void {
    this.valueChange.emit({ value });
  }
}
