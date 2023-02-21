import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardVariant } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-loading',
  templateUrl: './product-loading.component.html',
  styleUrls: ['./product-loading.component.scss'],
})
export class ProductLoadingComponent implements OnInit {
  initialCategories = ['shakes', 'smoothies', 'desserts'];

  productCardDefault = CardVariant.FILLED;
  productCardVariant$ = new BehaviorSubject<CardVariant>(
    this.productCardDefault
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.changeProductCardVariant();
  }

  changeProductCardVariant(): void {
    this.breakpointObserver
      .observe('(min-width: 600px)')
      .subscribe((result) => {
        result.matches
          ? this.productCardVariant$.next(CardVariant.OUTLINED)
          : this.productCardVariant$.next(CardVariant.FILLED);
      });
  }
}
