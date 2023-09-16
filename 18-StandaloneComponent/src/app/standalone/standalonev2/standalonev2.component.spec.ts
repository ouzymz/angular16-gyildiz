import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Standalonev2Component } from './standalonev2.component';

describe('Standalonev2Component', () => {
  let component: Standalonev2Component;
  let fixture: ComponentFixture<Standalonev2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Standalonev2Component]
    });
    fixture = TestBed.createComponent(Standalonev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
