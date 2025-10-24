import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatoriCustomGroupComponent } from './validatori-custom-group.component';

describe('ValidatoriCustomGroupComponent', () => {
  let component: ValidatoriCustomGroupComponent;
  let fixture: ComponentFixture<ValidatoriCustomGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidatoriCustomGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatoriCustomGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
