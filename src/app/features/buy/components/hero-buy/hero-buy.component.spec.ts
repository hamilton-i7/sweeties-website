import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuyComponent } from './hero-buy.component';

describe('HeroBuyComponent', () => {
  let component: HeroBuyComponent;
  let fixture: ComponentFixture<HeroBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
