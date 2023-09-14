import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecComponent } from './product-spec.component';

describe('ProductSpecComponent', () => {
  let component: ProductSpecComponent;
  let fixture: ComponentFixture<ProductSpecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSpecComponent]
    });
    fixture = TestBed.createComponent(ProductSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
