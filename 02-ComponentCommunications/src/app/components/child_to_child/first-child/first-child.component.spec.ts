import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChildComponent } from './first-child.component';

describe('FirstChildComponent', () => {
  let component: FirstChildComponent;
  let fixture: ComponentFixture<FirstChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstChildComponent]
    });
    fixture = TestBed.createComponent(FirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
