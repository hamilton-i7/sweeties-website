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

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsMap$ = new BehaviorSubject<Map<string, IProduct[]>>(new Map());

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
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
    a: KeyValue<string, IProduct[]>,
    b: KeyValue<string, IProduct[]>
  ): number {
    return 0;
  }
}
