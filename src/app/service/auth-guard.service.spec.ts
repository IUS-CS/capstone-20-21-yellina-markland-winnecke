import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import {RouterTestingModule} from '@angular/router/testing';
import {InformationComponent} from '../information/information.component';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    })
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
