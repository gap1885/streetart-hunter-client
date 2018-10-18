import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StreetartService {
 
    private baseUrl = `${environment.apiUrl}/streetart`;
  
    constructor(private httpClient: HttpClient) {}

    getAll(): Promise<any> {
      const options = {
        withCredentials: true
      };
      return this.httpClient.get(`${this.baseUrl}`, options)
        .toPromise();

    }
    create(data): Promise<any> {
      const options = {
        withCredentials: true
      };
      return this.httpClient.post(`${this.baseUrl}`, data, options)
        .toPromise();
    }
    getStreetart(id:Identifiers): Promise<any> {
      const options = {
        withCredentials: true
      };
      return this.httpClient.post('${this.baseUrl}', id, options)
        .toPromise();
      
 
    }
  }

  