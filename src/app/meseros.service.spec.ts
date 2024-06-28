import { TestBed } from '@angular/core/testing';

import { MeserosService } from './meseros.service';

describe('MeserosService', () => {
  let service: MeserosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeserosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
