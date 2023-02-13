import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledLinkComponent } from './filled-link.component';

describe('FilledLinkComponent', () => {
  let component: FilledLinkComponent;
  let fixture: ComponentFixture<FilledLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilledLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilledLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
