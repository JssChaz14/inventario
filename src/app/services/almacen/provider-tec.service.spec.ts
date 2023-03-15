import { TestBed } from '@angular/core/testing';

import { ProviderTecService } from './provider-tec.service';

describe('ProviderTecService', () => {
  let service: ProviderTecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderTecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
