import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaQuadraComponent } from './reserva-quadra.component';

describe('ReservaQuadraComponent', () => {
  let component: ReservaQuadraComponent;
  let fixture: ComponentFixture<ReservaQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
