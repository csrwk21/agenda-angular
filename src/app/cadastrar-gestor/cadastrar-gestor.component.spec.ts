import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarGestorComponent } from './cadastrar-gestor.component';

describe('CadastrarGestorComponent', () => {
  let component: CadastrarGestorComponent;
  let fixture: ComponentFixture<CadastrarGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarGestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
