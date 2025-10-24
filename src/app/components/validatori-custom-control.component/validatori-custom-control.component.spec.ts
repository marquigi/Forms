import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatoriCustomControlComponent } from './validatori-custom-control.component';

describe('ValidatoriCustomControlComponent', () => {
  let component: ValidatoriCustomControlComponent;
  let fixture: ComponentFixture<ValidatoriCustomControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidatoriCustomControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatoriCustomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
