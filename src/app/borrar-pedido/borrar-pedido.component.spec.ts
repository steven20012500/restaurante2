import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPedidoComponent } from './borrar-pedido.component';

describe('BorrarPedidoComponent', () => {
  let component: BorrarPedidoComponent;
  let fixture: ComponentFixture<BorrarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrarPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
