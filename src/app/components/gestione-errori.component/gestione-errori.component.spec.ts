import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneErroriComponent } from './gestione-errori.component';

describe('GestioneErroriComponent', () => {
  let component: GestioneErroriComponent;
  let fixture: ComponentFixture<GestioneErroriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestioneErroriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneErroriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
