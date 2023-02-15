import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { BehaviorSubject, from, mergeMap } from 'rxjs';
import {
  CATEGORY_NEW,
  CATEGORY_RECOMMENDED,
} from '../../../../core/constants/category';
import { ProductService } from '../../services/product.service';
import { ProductStorageService } from '../../services/product-storage.service';
import { getDownloadURL } from '@angular/fire/storage';
import { isNewProduct } from '../../../../core/utils/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsMap$ = new BehaviorSubject<
    Map<string, (Product & { imgUrl: string })[]>
  >(new Map());

  constructor(
    private productService: ProductService,
    private productStorageService: ProductStorageService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    const imagesPromise = this.productStorageService.getImages();

    from(imagesPromise)
      .pipe(
        mergeMap(async (images) => {
          const map: Map<string, string> = new Map();
          const mapSetup = new Promise<void>((resolve) => {
            images.forEach(async (image) => {
              map.set(image.fullPath, await getDownloadURL(image));
              resolve();
            });
          });

          await mapSetup;
          return this.productService.getProducts(map);
        }),
        mergeMap((result) => result)
      )
      .subscribe((products) => {
        this.setupProductsMap(products);
      });
  }

  private setupProductsMap(products: (Product & { imgUrl: string })[]): void {
    const result: Map<string, (Product & { imgUrl: string })[]> = new Map();

    products.forEach((product) => {
      if (isNewProduct(product)) {
        result.set(CATEGORY_NEW, [
          ...(result.get(CATEGORY_NEW) ?? []),
          product,
        ]);
      }

      if (product.recommended) {
        result.set(CATEGORY_RECOMMENDED, [
          ...(result.get(CATEGORY_RECOMMENDED) ?? []),
          product,
        ]);
      }

      result.set(product.category, [
        ...(result.get(product.category) ?? []),
        product,
      ]);
    });

    this.productsMap$.next(result);
  }
}
