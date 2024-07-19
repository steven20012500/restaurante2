import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlatosComponent } from './update-platos.component';

describe('UpdatePlatosComponent', () => {
  let component: UpdatePlatosComponent;
  let fixture: ComponentFixture<UpdatePlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePlatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
