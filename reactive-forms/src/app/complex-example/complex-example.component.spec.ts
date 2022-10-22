import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexExampleComponent } from './complex-example.component';

describe('ComplexExampleComponent', () => {
  let component: ComplexExampleComponent;
  let fixture: ComponentFixture<ComplexExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
