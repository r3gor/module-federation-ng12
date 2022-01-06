import { TestBed } from '@angular/core/testing';

import { MfeCoreSampleService } from './mfe-core-sample.service';

describe('MfeCoreSampleService', () => {
  let service: MfeCoreSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeCoreSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
