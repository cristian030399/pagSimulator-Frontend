import { TestBed } from '@angular/core/testing';

import { PagSimulatorAPIService } from './pag-simulator-api.service';

describe('PagSimulatorAPIService', () => {
  let service: PagSimulatorAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagSimulatorAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
