import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatoriComponent } from './validatori.component';

describe('ValidatoriComponent', () => {
  let component: ValidatoriComponent;
  let fixture: ComponentFixture<ValidatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidatoriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
