import { TestBed } from '@angular/core/testing';

import { LinguagemServiceService } from './linguagem-service.service';

describe('LinguagemServiceService', () => {
  let service: LinguagemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinguagemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
