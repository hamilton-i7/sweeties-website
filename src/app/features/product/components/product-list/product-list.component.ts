import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  CATEGORY_NEW,
  CATEGORY_RECOMMENDED,
} from '../../../../core/constants/category';
import { ProductService } from '../../services/product.service';
import * as dayjs from 'dayjs';
import { IProduct } from '../../../../core/models/product';
import { KeyValue } from '@angular/common';
import { Category } from '../../../../core/models/category';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CardVariant } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsMap$ = new BehaviorSubject<Map<string, IProduct[]>>(new Map());
  productCardVariant$ = new BehaviorSubject<CardVariant>(CardVariant.FILLED);
  productCardDefault = CardVariant.FILLED;

  constructor(
    private productService: ProductService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.changeProductCardVariant();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => this.setupProductsMap(products));
  }

  getSectionId(key: string): string {
    switch (key) {
      case 'nuevo':
        return 'new';
      case 'recomendado':
        return 'recommended';
      case 'smoothies':
        return 'smoothies';
      case 'batidos':
        return 'shakes';
      default:
        return 'desserts';
    }
  }

  private setupProductsMap(products: IProduct[]): void {
    const result: Map<string, IProduct[]> = new Map([
      [CATEGORY_NEW, []],
      [CATEGORY_RECOMMENDED, []],
      [Category.SHAKES, []],
      [Category.SMOOTHIES, []],
      [Category.DESSERTS, []],
    ]);

    products.forEach((product) => {
      if (this.isNewProduct(product)) {
        result.set(CATEGORY_NEW, [...result.get(CATEGORY_NEW)!, product]);
      }

      if (product.recommended) {
        result.set(CATEGORY_RECOMMENDED, [
          ...result.get(CATEGORY_RECOMMENDED)!,
          product,
        ]);
      }

      result.set(product.category, [...result.get(product.category)!, product]);
    });

    this.productsMap$.next(result);
  }

  isNewProduct(product: IProduct): boolean {
    const createdDate = dayjs(product.createdAt);
    const monthOldDate = dayjs(new Date()).subtract(1, 'month');

    return createdDate.isAfter(monthOldDate);
  }

  setupKeysOrder(
    _a: KeyValue<string, IProduct[]>,
    _b: KeyValue<string, IProduct[]>
  ): number {
    return 0;
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
