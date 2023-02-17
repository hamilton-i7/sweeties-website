import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filled-link',
  templateUrl: './filled-link.component.html',
  styleUrls: ['./filled-link.component.scss'],
})
export class FilledLinkComponent {
  @Input() internal = true;
  @Input() link = '';
  @Input() darkVariant = false;
}
