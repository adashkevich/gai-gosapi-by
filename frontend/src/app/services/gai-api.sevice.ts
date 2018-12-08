import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GaiApiService {
  reports = 'reports';
  constructor(private api: ApiService) {

  }
  sendReports(formData: FormData) {
    return  this.api.post(`${this.reports}`, formData);
  }
}
