import { TestBed } from '@angular/core/testing';

import { ProjectsapiService } from './projectsapi.service';

describe('ProjectsapiService', () => {
  let service: ProjectsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
