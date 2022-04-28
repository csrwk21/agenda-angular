import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSolicitanteComponent } from './cadastrar-solicitante.component';

describe('CadastrarSolicitanteComponent', () => {
  let component: CadastrarSolicitanteComponent;
  let fixture: ComponentFixture<CadastrarSolicitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarSolicitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
