import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewComponent } from './product-overview.component';

describe('ProductOverviewComponent', () => {
  let component: ProductOverviewComponent;
  let fixture: ComponentFixture<ProductOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductOverviewComponent]
    });
    fixture = TestBed.createComponent(ProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
