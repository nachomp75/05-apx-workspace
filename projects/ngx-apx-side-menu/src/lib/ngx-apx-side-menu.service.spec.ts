import { TestBed } from '@angular/core/testing';

import { NgxApxSideMenuService } from './ngx-apx-side-menu.service';

describe('NgxApxSideMenuService', () => {
  let service: NgxApxSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxApxSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
