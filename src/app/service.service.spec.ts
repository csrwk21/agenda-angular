import { TestBed } from '@angular/core/testing';

import { ServicoAgenda } from './servicoAgenda.service';

describe('ServiceService', () => {
  let service: ServicoAgenda;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoAgenda);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
