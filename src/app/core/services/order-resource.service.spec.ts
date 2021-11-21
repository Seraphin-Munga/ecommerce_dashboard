import { TestBed } from '@angular/core/testing';

import { OrderResourceService } from './order-resource.service';

describe('OrderResourceService', () => {
  let service: OrderResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
