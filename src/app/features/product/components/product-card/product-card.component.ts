import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product?: Product;
  @Input() imgSrc = '';
  @Input() isNew = false;
  @Input() variant = CardVariant.FILLED;
}

export enum CardVariant {
  FILLED,
  OUTLINED,
}
