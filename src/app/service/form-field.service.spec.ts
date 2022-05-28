import { TestBed } from '@angular/core/testing';

import { FormFieldService } from './form-field.service';

describe('FormFieldService', () => {
  let service: FormFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
