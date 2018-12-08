import { environment as base_environment } from './environment.base';

export const environment = Object.assign(
  base_environment, {
    production: true,
    baseUrl: 'http://localhost:8000',
    showTechnicalInfo: false,
  }
);
