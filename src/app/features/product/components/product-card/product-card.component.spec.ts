import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Category } from '../../../../core/models/category';
import { IProduct } from '../../../../core/models/product';

import { CardVariant, ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  const dummyProduct: IProduct = {
    id: '0',
    name: 'Batido de fresa',
    description: 'Vaso 16 oz.',
    price: '3.25',
    recommended: true,
    category: Category.SHAKES,
    imgPath: 'products/batido-fresa.png',
    imgUrl: 'http://localhost:9876/batido-fresa.png',
    createdAt: new Date('2021-07-09'),
    updatedAt: new Date('2021-07-09'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = dummyProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the passed @Input product value', () => {
    const headingDe = fixture.debugElement.query(By.css('.product__name'));
    const headingEl: HTMLHeadingElement = headingDe.nativeElement;

    const descriptionDe = fixture.debugElement.query(
      By.css('.product__description')
    );
    const descriptionEl: HTMLParagraphElement = descriptionDe.nativeElement;

    const priceDe = fixture.debugElement.query(By.css('.product__price'));
    const priceEl: HTMLParagraphElement = priceDe.nativeElement;

    const imgDe = fixture.debugElement.query(By.css('.product__img'));
    const imgEl: HTMLImageElement = imgDe.nativeElement;

    expect(headingEl.textContent)
      .withContext('should render the name of the product')
      .toBe(dummyProduct.name);

    expect(descriptionEl.innerText)
      .withContext('should render the description of the product')
      .toBe(`${dummyProduct.description}`);

    expect(priceEl.innerText)
      .withContext('should render the price of the product')
      .toBe(`$${dummyProduct.price}`);

    expect(imgEl.src)
      .withContext('should render the image URL from the product')
      .toBe(dummyProduct.imgUrl);
    expect(imgEl.alt)
      .withContext('should render the name of the product')
      .toBe(dummyProduct.name);
  });

  it('should display "New" chip only when the product is new', () => {
    let divDe = fixture.debugElement.query(By.css('.product__chip'));
    let divEl = divDe?.nativeElement;

    expect(divEl).withContext('should not render div').toBeFalsy();

    component.isNew = true;
    fixture.detectChanges();

    divDe = fixture.debugElement.query(By.css('.product__chip'));
    divEl = divDe.nativeElement;

    expect(divEl).withContext('should render div').toBeTruthy();
  });

  it('should change class based on the card variant', () => {
    const articleDe = fixture.debugElement.query(By.css('.product'));
    const articleEl: HTMLElement = articleDe.nativeElement;

    expect(articleEl.classList.contains('filled'))
      .withContext('should have class "filled"')
      .toBeTrue();

    component.variant = CardVariant.OUTLINED;
    fixture.detectChanges();

    expect(articleEl.classList.contains('outlined'))
      .withContext('should have class "outlined"')
      .toBeTrue();
  });

  it('should display default price when no price is set', () => {
    const priceDe = fixture.debugElement.query(By.css('.product__price'));
    const priceEl: HTMLParagraphElement = priceDe.nativeElement;
    const dummyProductWithoutPrice: IProduct = {
      ...dummyProduct,
      price: undefined,
    };

    component.product = dummyProductWithoutPrice;
    fixture.detectChanges();

    expect(priceEl.innerText)
      .withContext('should render "Por consulta"')
      .toBe('Por consulta');
  });
});
