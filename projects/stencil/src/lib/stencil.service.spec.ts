import { TestBed } from '@angular/core/testing';

import { StencilService } from './stencil.service';

describe('StencilService', () => {
  let service: StencilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StencilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
