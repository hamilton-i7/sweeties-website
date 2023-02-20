import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  CATEGORY_NEW,
  CATEGORY_RECOMMENDED,
} from '../../../../core/constants/category';
import { dummyProducts } from '../../../../core/mocks/product';
import { Category } from '../../../../core/models/category';
import { IProduct } from '../../../../core/models/product';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

import { ProductListComponent } from './product-list.component';
import * as dayjs from 'dayjs';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductService>;

  beforeEach(async () => {
    productServiceSpy = jasmine.createSpyObj('ProductService', ['getProducts']);
    productServiceSpy.getProducts.and.returnValue(of(dummyProducts));

    await TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductCardComponent],
      providers: [{ provide: ProductService, useValue: productServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setup productsMap$ correctly', () => {
    const result: Map<string, IProduct[]> = new Map([
      [CATEGORY_NEW, []],
      [CATEGORY_RECOMMENDED, [dummyProducts[0]]],
      [Category.SHAKES, dummyProducts],
      [Category.SMOOTHIES, []],
      [Category.DESSERTS, []],
    ]);

    component.productsMap$.subscribe((map) => {
      expect(map).withContext('should match result map').toEqual(result);
    });
  });

  it('isNewProduct should return false', () => {
    expect(component.isNewProduct(dummyProducts[0])).toBeFalse();
    expect(component.isNewProduct(dummyProducts[1])).toBeFalse();
  });

  it('isNewProduct should return true', () => {
    const newProduct: IProduct = {
      ...dummyProducts[0],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const twoWeeksOldProduct: IProduct = {
      ...dummyProducts[0],
      createdAt: dayjs(new Date()).subtract(2, 'week').toDate(),
      updatedAt: dayjs(new Date()).subtract(2, 'week').toDate(),
    };
    const fiveDaysOldProduct: IProduct = {
      ...dummyProducts[0],
      createdAt: dayjs(new Date()).subtract(5, 'day').toDate(),
      updatedAt: dayjs(new Date()).subtract(5, 'day').toDate(),
    };

    expect(component.isNewProduct(newProduct)).toBeTrue();
    expect(component.isNewProduct(twoWeeksOldProduct)).toBeTrue();
    expect(component.isNewProduct(fiveDaysOldProduct)).toBeTrue();
  });

  it('should only display categories with products', () => {
    const headingDe = fixture.debugElement.queryAll(By.css('.category__name'));
    const headingEls: HTMLHeadingElement[] = headingDe.map(
      (debug) => debug.nativeElement
    );

    expect(headingEls[0].innerText)
      .withContext('should have "recommended" in Spanish and capitalized')
      .toBe('Recomendado');
    expect(headingEls[1].innerText)
      .withContext('should have "shakes" in Spanish and capitalized')
      .toBe('Batidos');

    expect(headingEls.length)
      .withContext('should only have two categories displayed')
      .toBe(2);
  });
});
