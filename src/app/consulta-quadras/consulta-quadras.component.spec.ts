import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaQuadrasComponent } from './consulta-quadras.component';

describe('ConsultaQuadrasComponent', () => {
  let component: ConsultaQuadrasComponent;
  let fixture: ComponentFixture<ConsultaQuadrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaQuadrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaQuadrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
