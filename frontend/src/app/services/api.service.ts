import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.baseUrl;
  apiPrefix = environment.apiPrefix;
  apiVersion = environment.apiVersion;

  constructor(private  httpClient: HttpClient) {
  }

  public getFullApiRoute(route: string, id?: number): string {
    let apiRoute;
    if (id) {
      apiRoute = `${this.baseUrl}/${this.apiPrefix}/${this.apiVersion}/${route}/${id}/`;
    } else {
      apiRoute = `${this.baseUrl}/${this.apiPrefix}/${this.apiVersion}/${route}/`;
    }
    return apiRoute;
  }

  private getDefaultHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }

  private getHttpParams(params?) {
    const httpParams = new HttpParams({fromObject: params});
    return httpParams;
  }

  private getOptions(optionalParams?) {
    const headers = this.getDefaultHeaders();
    const httpParams = this.getHttpParams(optionalParams);
    const options = {params: httpParams, headers: headers};
    return options;
  }

  public get<T>(route: string, params?): Observable<any> {
    return this.httpClient.get<T>(this.getFullApiRoute(route), this.getOptions(params));
  }

  public getById(route: string, id: number, params?) {
    return this.httpClient.get(this.getFullApiRoute(route, id), this.getOptions(params));
  }

  public post(route: string, data?, params?) {
    return this.httpClient.post(this.getFullApiRoute(route), data, this.getOptions(params));
  }

  public postById(route: string, id: number, data?, params?) {
    return this.httpClient.post(this.getFullApiRoute(route, id), data, this.getOptions(params));
  }

  public put(route: string, data, params?) {
    return this.httpClient.put(this.getFullApiRoute(route), data, this.getOptions(params));
  }

  public putById(route: string, id: number, data?, params?) {
    return this.httpClient.put(this.getFullApiRoute(route, id), data, this.getOptions(params));
  }

  public delete(route: string, params?) {
    return this.httpClient.delete(this.getFullApiRoute(route), this.getOptions(params));
  }

  public deleteById(route: string, id: number, params?) {
    return this.httpClient.delete(this.getFullApiRoute(route, id), this.getOptions(params));
  }

  public patch(route: string, data, params?) {
    return this.httpClient.patch(this.getFullApiRoute(route), data, this.getOptions(params));
  }

  public patchById(route: string, id: number, data, params?) {
    return this.httpClient.patch(this.getFullApiRoute(route, id), data, this.getOptions(params));
  }
}
