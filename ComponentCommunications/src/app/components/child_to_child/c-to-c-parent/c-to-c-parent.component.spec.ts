import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToCParentComponent } from './c-to-c-parent.component';

describe('CToCParentComponent', () => {
  let component: CToCParentComponent;
  let fixture: ComponentFixture<CToCParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CToCParentComponent]
    });
    fixture = TestBed.createComponent(CToCParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
