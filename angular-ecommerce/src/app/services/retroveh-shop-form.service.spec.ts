import { TestBed } from '@angular/core/testing';

import { Luv2ShopFormService } from './retroveh-shop-form.service';

describe('Luv2ShopFormService', () => {
  let service: Luv2ShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Luv2ShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
