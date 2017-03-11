import { TestBed, inject } from '@angular/core/testing';

import { FlowControlService } from './flow-control.service';

describe('FlowControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowControlService]
    });
  });

  it('should ...', inject([FlowControlService], (service: FlowControlService) => {
    expect(service).toBeTruthy();
  }));
});
