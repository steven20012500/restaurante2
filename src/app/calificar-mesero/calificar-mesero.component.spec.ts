import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarMeseroComponent } from './calificar-mesero.component';

describe('CalificarMeseroComponent', () => {
  let component: CalificarMeseroComponent;
  let fixture: ComponentFixture<CalificarMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalificarMeseroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificarMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
