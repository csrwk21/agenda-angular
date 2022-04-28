import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorRaComponent } from './gestor-ra.component';

describe('GestorRaComponent', () => {
  let component: GestorRaComponent;
  let fixture: ComponentFixture<GestorRaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorRaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
