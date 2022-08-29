import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProjectsComponent } from '../projects/projects.component';

@Injectable({
  providedIn: 'root',
})
export class ProjectsapiService {
  constructor(private httpClient: HttpClient) {}
}
